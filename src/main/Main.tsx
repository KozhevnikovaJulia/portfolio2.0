import React from 'react';
import style from "./Main.module.css";
import myPhotoImage from "../assets/image/7.jpg"

export function Main() {
  const myPhoto= {
    backgroundImage: `url(${myPhotoImage })`
  };
  return (
    <div className={style.mainBlock}>
      <div className={style.mainText}>
            <div className={style.hello}>Hello. My name is</div>
            <h1 className={style.name}>Julia</h1>
            <p>A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.</p>
      </div>
      <div className={style.mainPhoto} style={myPhoto}></div>

    </div>

  )
}

