"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./NavLink/navLink";
import Image from "next/image";
import { handleGithubLogout } from "@/lib/action";

const Links = ({session}) => {
    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        // {
        //     title: "Register",
        //     path: "/register",
        // }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <form action={handleGithubLogout}>
                        <button className={styles.logout}>logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink
                        item={{ title: "Login", path: "/login" }}
                        key='login'
                    />
                )}
            </div>
            <Image className={styles.menuButton} src='/menu.png' alt='' height={30} width={30} onClick={() => setOpen(!open)} />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                    {session?.user ? (
                    <>
                        {session.user?.isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <form action={handleGithubLogout}>
                        <button className={styles.dropLogout}>logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink
                        item={{ title: "Login", path: "/login" }}
                        key='login'
                    />
                )}
                </div>
            )}
        </div>
    );
};

export default Links;
