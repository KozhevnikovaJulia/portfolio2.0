import React from 'react';
import style from "./Header.module.css"
import {Nav} from "../nav/Nav"
import {Info} from "../info/Info"

export function Header() {
  return (
    <div className={style.header}>
      
      <div className={style.toggleHolder}>
         <div id={style.toggle}>
           <div className={style.menuLine}></div>  
         </div>
      </div>

      <div className={style.topPagination}>
        <div className={style.currentPageNum}>01</div>
        <div className={style.pagination}></div>
        <div className={style.totalPageNum}>04</div>
      </div>
      <div className={style.myInfo}>
        <Info />
      </div>
      
    </div>
  )
}

