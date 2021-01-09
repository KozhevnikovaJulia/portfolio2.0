import React from 'react';
import style from "./Menu.module.css";

export function Menu() {
  return (
    <div className={style.menu}>
      
      <div><a href="">Home</a></div>
      <div><a href="">Skills</a></div>
      <div><a href="">Progects</a></div>
      <div><a href="">Experience</a></div>
      <div><a href="">Contacts</a></div>
    </div>
  )
}

