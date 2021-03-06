import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting coder!</h1>
        <div className={styles.imgWrap}>
          <Image
            src="/../public/images/coder.jpg"
            className={styles.coderImg}
            width={276}
            height={156}
            alt="coder"
          />
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>

        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blog-item">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is used to design the logic of the webpage</p>
          </div>
          <div className="blog-item">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is used to design the logic of the webpage</p>
          </div>
          <div className="blog-item">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is used to design the logic of the webpage</p>
          </div>
          <div className="blog-item">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is used to design the logic of the webpage</p>
          </div>
        </div>
      </main>
    </div>
  );
}
