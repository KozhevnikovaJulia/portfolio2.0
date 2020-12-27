import React from 'react';
import style from "./Contacts.module.css"

export function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={style.container}>
      <div className={style.title}>
          <h4 >CONTACTS</h4>
        </div>

        <div className={style.contacts}>

          <form action="" className={style.form}>
            <input type="text" />
            <input type="text" />
            <textarea></textarea>
          </form>

        </div>

        <div >
         <button className={style.contactButton}>Отправить</button>
        </div>
      </div>


    </div>
  )
}

