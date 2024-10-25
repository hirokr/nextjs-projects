import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
    // throw new Error('Home')
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thoughts Agency</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    eum porro numquam, sequi impedit pariatur aut iusto quam
                    ipsum eveniet.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image
                        className={styles.brandImage}
                        src='/brands.png'
                        alt=''
                        fill
                    />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.heroImage}
                    src='/hero.gif'
                    alt=''
                    fill
                />
            </div>
        </div>
    );
};

export default Home;
