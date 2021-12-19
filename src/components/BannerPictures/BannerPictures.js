import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./BannerPictures.module.css";

export default function BannerPictures(props) {
  const [coverIndex, setCoverIndex] = useState(0);
  const timer = useRef("");

  const pictures = props.games;

  const greaterThanSign = [
    "https://www.freeiconspng.com/uploads/green-greater-than-sign-icon-1.png",
    "https://www.freeiconspng.com/uploads/less-icon-4.png",
  ];

  let cover = pictures[coverIndex].banner;

  const changeBanner = (offset) => {
    if (coverIndex + offset === 12) {
      setCoverIndex(0);
      return;
    }
    if (coverIndex + offset === -1) {
      setCoverIndex(11);
      return;
    }
    setCoverIndex(coverIndex + offset);
  };

  useEffect(() => {
    timer.current = setTimeout(() => changeBanner(1), 3000);
    return () => {
      clearTimeout(timer.current);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <button className={styles.arrowButton} onClick={() => changeBanner(-1)}>
          <img className={styles.gts} alt="pict" src={greaterThanSign[1]} />
        </button>
        <Link to={`/details?gameId=${props.games[coverIndex].id}`}>
          <img
            className={styles.img}
            alt="pict"
            src={cover}
            onMouseOver={() => {
              clearTimeout(timer.current);
            }}
            onMouseOut={() => {
              timer.current = setTimeout(() => changeBanner(1), 3000);
            }}
          />
        </Link>
        <button className={styles.arrowButton} onClick={() => changeBanner(1)}>
          <img className={styles.gts} alt="pict" src={greaterThanSign[0]} />
        </button>
      </div>
      <div className={styles.pickers}>
        {pictures.map((element, index) => {
          const style = {};
          if (coverIndex === index) {
            style.backgroundColor = "white";
          }
          return (
            <button
              className={styles.picker}
              key={index}
              style={style}
              onClick={() => setCoverIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
