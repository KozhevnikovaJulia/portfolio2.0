import style from './Nav.module.css';
import { Menu } from '../menu/Menu';
import { Link, animateScroll as scroll } from 'react-scroll';

export function Nav(props: { menuModeToggle: () => void; setCurrentPage: (currentPage: string) => void; currentPage: string; menuMode: boolean }) {
  return (
    <div className={props.menuMode ? `${style.nav} ${style.active}` : style.nav}>
      <a href='#' onClick={props.menuModeToggle}>
        <div className={style.toggleHolder}>
          <div id={style.toggle} className={style.on}>
            <div className={style.menuLine}></div>
          </div>
        </div>
      </a>

      <div className={style.topPagination}>
        <div className={style.currentPageNum}>{props.currentPage}</div>
        <div className={style.pagination}></div>
        <div className={style.totalPageNum}>05</div>
      </div>

      <div className={style.menu}>
        <Menu setCurrentPage={props.setCurrentPage} menuModeToggle={props.menuModeToggle} />
      </div>
    </div>
  );
}
