"use client";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, fromAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("./login");
  }, [state?.success, router]);
  return (
    <div className={styles.container}>
      <form className={styles.form} action={fromAction}>
        <input type='text' placeholder='username' name='username' />
        <input type='text' placeholder='email' name='email' />
        <input type='text' placeholder='password' name='password' />
        <input type='text' placeholder='password Again' name='passwordRepeat' />
        <div className={styles.error}>{state?.error}</div>
        <button>Register</button>
      </form>
      <Link href={"./login"}>Have an account</Link>
    </div>
  );
};

export default RegisterForm;
