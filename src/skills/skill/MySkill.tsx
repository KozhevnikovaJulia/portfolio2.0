import React from 'react';
import style from "./MySkill.module.css"


export function MySkill (props: {title: string, description: string}) {
  return (
    <div className={style.mySkillBlock}>
<div className={style.icon}></div>
  <h4>{props.title}</h4>
  <div>{props.description}</div>

    </div>
  )
}

