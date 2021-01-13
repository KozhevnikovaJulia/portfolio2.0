import React from "react"
import style from "./ButtonContactForm.module.scss"

export function ButtonContactForm(props:{buttonText: string}) {
  return (
    <div >
      <button className={style.contactButton }>{props.buttonText}</button>
    </div>
  )
}

