import style from "./Contacts.module.scss"
import {TextBlock} from "../common/components/textBlock/TextBlock"

export function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <TextBlock
        title={"Get In Touch"}
        largeText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
      />

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

