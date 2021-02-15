import style from "./MyProgect.module.scss"
import { Zoom } from "react-awesome-reveal"

type styleType = {
  backgroundImage: string
}


export function MyProgect(props: { style: styleType,  projectTitle: string, progectDescription: string, link:string }) {
  return (
    <div className={style.myProgectBlock}>
      <a href={props.link} className={style.imageContainer} style={props.style}>

        <div className={style.myProgectDescription}>
          <Zoom>
            <div className={style.myProgectTitle}>{props.projectTitle}</div>
            <div>{props.progectDescription}</div>
          </Zoom>
        </div>
      </a>
    </div>
  )
}
