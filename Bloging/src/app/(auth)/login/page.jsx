import LoginForm from "@/components/loginForm/loginForm"
import { handleGithubLogin } from "@/lib/action"
import styles from "./login.module.css"

export const Login = () => {

  return (
    <div className={styles.container}>
      <form className={styles.github} action={handleGithubLogin}>
        <button>signin with github</button>
      </form>
      <div >
        <LoginForm />
      </div>
    </div>
  )
}



export default Login