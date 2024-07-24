import { allDocs } from "contentlayer/generated";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainText}>Make good websites with me!</h1>
      <p className={styles.mainDes}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className={styles.firstAction}>Get Started</button>
      {/* Header */}
    </main>
  );
}
