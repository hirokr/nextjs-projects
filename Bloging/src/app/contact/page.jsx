import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact Description",
};


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill />
      </div>
      <div className={styles.formContainer}>
        <form action='#' className={styles.form}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Phone number' />
          <textarea
            placeholder='Message'
            name=''
            id=''
            rows='10'
            cols='30'
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
