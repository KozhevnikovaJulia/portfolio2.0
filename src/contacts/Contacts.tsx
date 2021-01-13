import style from "./Contacts.module.scss"
import {TextBlock} from "../common/components/textBlock/TextBlock"
import {ContactReduxForm} from "./ContactForm"

export function Contacts(props:any) {
  const onSubmit = (formData: any)=> {
    props.contact(formData.name, formData.email, formData.subject, formData.message)
      }
  return (
    <div className={style.contactsBlock}>
      <TextBlock
        title={"Get In Touch"}
        largeText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
      />

      <div className={style.contacts}>
        <ContactReduxForm onSubmit ={onSubmit}/>
      <div>

        </div>
      </div>
    </div>
  )
}

