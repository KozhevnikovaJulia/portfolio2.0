import React from "react"
import style from "./Button.module.scss"

export function Button(props:{buttonText: string}) {
  return (
    <div >
      <button className={style.button }>{props.buttonText}</button>
    </div>
  )
}

