import React from 'react';
import style from "./Info.module.css";

export function Info() {
  return (
    <div className={style.info}>
      <div className={style.titleInfo}>NAME</div>
      <div className={style.textInfo}>Julia Kozhevnikova</div>
      <div className={style.titleInfo}>ROLE</div>
      <div className={style.textInfo}>Front-End developer</div>
      <div className={style.titleInfo}>EMAIL</div>
      <div className={style.textInfo}>Kozhevnikova1501@yandex.ru</div>
      <div className={style.titleInfo}>PHONE</div>
      <div className={style.textInfo}>+7(985)359-08-06</div>
    </div>
  )
}

