import React from 'react';
import style from "./Header.module.css"
import {Nav} from "../nav/Nav"
import {Info} from "../info/Info"

export function Header() {
  return (
    <div className={style.header}>
      {/* <div>className={style.toggleHolder}
         <div id={style.toggle}></div>
      </div> */}
      <Info />
    </div>
  )
}

