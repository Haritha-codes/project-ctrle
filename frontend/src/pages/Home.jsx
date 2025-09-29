import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

// 👉 Example demo videos (replace with your own later)
const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(videos.length - 1);
    } else if (index >= videos.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.page}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, idx) => (
              <div key={idx} className={styles.slide}>
                <video src={video} autoPlay muted loop></video>
                <hr className={styles.sectionDivider} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            className={styles.arrowLeft}
            onClick={() => goToSlide(currentIndex - 1)}
          >
            ❮
          </button>
          <button
            className={styles.arrowRight}
            onClick={() => goToSlide(currentIndex + 1)}
          >
            ❯
          </button>

          {/* Dots */}
          <div className={styles.dots}>
            {videos.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${
                  idx === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(idx)}
              ></span>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;