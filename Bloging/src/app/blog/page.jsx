import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCards from "@/components/postCard/postCard";

// FETCH DATA WITH AND API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next: {revalidate: 3600}});

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCards post={post}/>
        </div>
      ))}
    
      {/* <PostCards post = {{title:"1" , desc:"h" }}/> */}
    </div>
  );
};

export default BlogPage;
3