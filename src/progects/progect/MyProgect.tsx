import React from 'react';
import style from "./MyProgect.module.css"

type styleType = {
  backgroundImage: string
}


export function MyProgect (props: {style: styleType, purposeProject: string, briefDescription: string}) {
  return (
    <div className={style.myProgectBlock}>
      <div className={style.imageContainer} style={props.style}>       
        <a className={style.progectButton} href="">Смотреть</a>
      </div>
      
      <span>{props.purposeProject}</span>
      <div>{props.briefDescription}</div>

    </div>
  )
}

