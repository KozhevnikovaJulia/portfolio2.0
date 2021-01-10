import React from "react"
import style from "./MySkill.module.scss"


export function MySkill (props:{icon: any, title: string, description: string}) {
  return (
    <div className={style.mySkillWrapper}>
      <div className={style.mySkill}>
        <div className={style.mySkillIcon}>
          {props.icon}
        </div>
        <h4 className={style.mySkillTitle}> {props.title}</h4>
        <div className={style.mySkillDescription}> {props.description}</div>
      </div>
    </div>
  )
}
