import style from "./MyProgect.module.scss"

type styleType = {
  backgroundImage: string
}


export function MyProgect(props: { style: styleType, purposeProject: string, briefDescription: string }) {
  return (
    <div className={style.myProgectBlock}>

      <div className={style.imageContainer} style={props.style}>
        <a href=""></a>
      </div>

    </div>
  )
}

