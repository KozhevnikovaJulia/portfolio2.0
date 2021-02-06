import style from "./MyProgect.module.scss"

type styleType = {
  backgroundImage: string
}


export function MyProgect(props: { style: styleType, purposeProject: string, briefDescription: string, link:string }) {
  return (
    <div className={style.myProgectBlock}>
      <a href={props.link} className={style.imageContainer} style={props.style}></a>     
    </div>
  )
}

