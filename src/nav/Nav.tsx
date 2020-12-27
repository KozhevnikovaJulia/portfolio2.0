import React from 'react';
import style from "./Nav.module.css"

export function Nav() {
  return (
    <div className={style.nav}>
      <div><a href="">Главная</a></div>
      <div><a href="">Скиллы</a></div>
      <div><a href="">Проекты</a></div>
      <div><a href="">Контакты</a></div>
    </div>
  )
}

