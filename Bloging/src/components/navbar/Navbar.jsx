import { auth } from "@/lib/auth.js";
import Links from "./links/Links.jsx";
import styles from"./navbar.module.css"

const Navbar = async () => {
    const session =  await auth();
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>Lamadev</div>
            <div>
                <Links session={session} />
            </div>
        </nav>
    );
};

export default Navbar;
