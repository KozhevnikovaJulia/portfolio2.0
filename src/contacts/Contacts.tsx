import style from "./Contacts.module.scss"
import {TextBlock} from "../common/components/textBlock/TextBlock"
import {ContactForm} from "./ContactForm"

export function Contacts(props: any) {
  return (
    <div id={"contactsBlock"} className={style.contactsBlock}>
      <TextBlock
        title={"Get In Touch"}
        largeText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
      />
      <div className={style.contacts}>
        <ContactForm />
        <div>
        </div>
      </div>
    </div>

  )
}

