import React from "react";
import styles from "../styles/Home.module.css";

const pills = [
  "VIDEO EDITING", "PHOTOGRAPHY", "THUMBNAILS DESIGN",
  "STOP MOTION", "SOUND DESIGN", "SHORT FORM CONTENT",
];

const Home = () => {
  return (
    <div className={styles.indexPage}>
      {/* Background Elements */}
      <div className={styles.bgOverlay}></div>
      <div className={styles.glowCircle}></div>

      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <h1 className={styles.title}>CTRL E</h1>
        <p className={styles.tagline}>CTRLE FOR EDITING</p>
        <p className={styles.subText}>Professional | Creative | Reliable</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>

      {/* Moving Services Pills */}
      <div className={styles.orbitBox}>
        <div className={styles.pillsTrack}>
          {pills.concat(pills).map((pill, idx) => (
            <div key={idx} className={styles.pillItem}>
              {pill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;