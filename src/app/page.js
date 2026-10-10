import Image from "next/image";
import portrait from "../images/insta_me.jpg";
import styles from "./page.module.css";
export default function HomePage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.content}>
          <p className={styles.kicker}>Full-stack developer · Austin, Texas</p>

          <h1 id="hero-title" className={styles.title}>
            Twenty years of serving customers. Now I build what they use
          </h1>

          <p className={styles.description}>
            I write React, Next.js and Node — careful, dependable web
            applications for teams and small businesses. I still think like the
            person on the other side of the counter.
          </p>

          <div className={styles.actions}>
            <a href="#selected-work" className={styles.primaryLink}>
              Selected Work
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className={styles.portrait}>
            <Image 
                src={portrait}
                alt="Alejandro Segura"
                fill
                sizes="(min-width: 64rem) 35vw, (min-width:48rem) 24rem, 90vw"
                className={styles.image}
            />
        </div>
      </section>
      <section
        id="selected-work"
        aria-labelledby="work-title"
        className={styles.work}
      >
        <h2 id="work-title">Selected work</h2>
        <p>Project case studies are being updated</p>

      </section>
    </main>
  );
}
