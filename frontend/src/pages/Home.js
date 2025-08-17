import React from "react";
import styles from "../styles/Home.module.css";

const pills = [
  "VIDEO EDITING", "PHOTOGRAPHY", "THUMBNAILS DESIGN",
  "STOP MOTION", "SOUND DESIGN", "SHORT FORM CONTENT",
];

const Home = () => {
  return (
    <div className={styles.indexPage}>
      <div className={styles.centeredText}>CTRL E</div>
      <div className={styles.subText}>CTRLE FOR EDITING</div>
      <div className={styles.subText}>Professional | Creative | Reliable</div>

      {/* Moving pills container */}
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