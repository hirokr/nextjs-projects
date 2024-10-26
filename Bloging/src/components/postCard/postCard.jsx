import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCards = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} className={styles.img} alt='' fill />
          </div>
        )}
        {/* <span className={styles.date}>01.01.2024</span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCards;
