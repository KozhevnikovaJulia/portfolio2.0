import React from 'react';
import style from './Header.module.css';
import { Info } from '../info/Info';

export function Header(props: { menuModeToggle: () => void; currentPage: string }) {
  return (
    <div className={style.header}>
      <a href='#' onClick={props.menuModeToggle}>
        <div className={style.toggleHolder}>
          <div id={style.toggle}>
            <div className={style.menuLine}></div>
          </div>
        </div>
      </a>

      <div className={style.topPagination}>
        <div className={style.currentPageNum}>{props.currentPage}</div>
        <div className={style.pagination}></div>
        <div className={style.totalPageNum}>05</div>
      </div>
      <div className={style.myInfo}>
        <Info />
      </div>
    </div>
  );
}
