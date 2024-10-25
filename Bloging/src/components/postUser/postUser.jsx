import Image from "next/image";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";


const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
      
        src={user? user.img : "/noavatar.png"}
        className={styles.avatar}
        alt=''
        width={50}
        height={50}
      />
      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user ? user.username : "No user found"}</span>
      </div>
    </div>
  );
};

export default PostUser;
