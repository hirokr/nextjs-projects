
import RegisterForm from "@/components/registerForm/registerForm";
import styles from "./register.module.css";

export const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm/>

      </div>
    </div>
  );
};

export default Register;
