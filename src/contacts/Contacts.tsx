import React from 'react';
import style from "./Contacts.module.css"

export function Contacts() {
  return (
    <div className={style.contactsBlock}>  

        <div className={style.getInTouch}>
          <h4 className={style.title}>Get In Touch</h4>
          <p  className={style.bigText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?</p>
        </div>

      <div className={style.contacts}>
        <form action="" className={style.form}>
          <input type="text" placeholder={"Name"} />
          <input type="text" placeholder={"Email"} />
          <input type="text" placeholder={"Subject"} />
          <textarea placeholder={"Message..."}></textarea>
          <button className={style.contactButton}>SEND</button>
        </form>
        <div>
         
        </div>

      </div>
    </div>
  )
}

