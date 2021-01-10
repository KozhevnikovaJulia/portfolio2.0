import style from "./Nav.module.scss"
import {Menu} from "../menu/Menu"

export function Nav() {
  return (
    <div className={style.nav}>

      <div className={style.toggleHolder}>
        <div id={style.toggle} className={style.on}>
          <div className={style.menuLine}></div>
        </div>
      </div>

      <div className={style.topPagination}>
        <div className={style.currentPageNum}>01</div>
        <div className={style.pagination}></div>
        <div className={style.totalPageNum}>04</div>
      </div>

      <div className={style.menu}>
        <Menu />
      </div>
    </div>
  )
}
