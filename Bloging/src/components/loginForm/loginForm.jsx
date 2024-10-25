"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, fromAction] = useFormState(login, undefined);

  // const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("./");
  // }, [state?.success, router]);
  
  return (
    <div className={styles.container}>
      <form className={styles.form} action={fromAction}>
        <input type='text' placeholder='username' name='username' />
        <input type='text' placeholder='password' name='password' />
        <div className={styles.error}>{state?.error}</div>
        <button>Login</button>
      </form>
      <Link className={styles.register} href={"./register"}>Create Account</Link>
    </div>
  );
};

export default LoginForm;
