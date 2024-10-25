import Image from "next/image";
import styles from "./singlePostPage.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AND API
const getData = async ({ slug }) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${slug}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

export const generateMetadata = async ({params} ) =>{
  const {slug} = params;
  const post = await getPost({slug});
  return {
    title:post.title,
    description:post.desc
  }
}

const reverse = (str) =>{
  const strRev =  str.split('-').reverse().join("-");
  return strRev;
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData({ slug });
  // const post = await getPost({slug});
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={post.img}
            alt=''
            fill
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          
          {post && (
            <Suspense fallback={<div>Loading....</div>}>
              <PostUser userId={post.userId} key={post.index} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{reverse(post.createdAt.toString().slice(0,10))}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
