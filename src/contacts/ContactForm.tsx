import style from "./ContactForm.module.scss"
import { useFormik } from "formik"
import {InputContactForm} from "../common/components/inputContactForm/InputContactForm"
import {ButtonContactForm} from "../common/components/buttonContactForm/ButtonontactForm"
import {TextareaContactForm} from "../common/components/texareaContactForm/TextareaContactForm"
import emailjs from "emailjs-com"




export function ContactForm(props: any ) {


function sendEmail(e: any) {
  e.preventDefault();

  emailjs.sendForm('service_bjbi15g', 'template_shjo7bi', e.target, 'user_eQFOSWwvznTDIbhzcNLDU')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}


  return (
     <form onSubmit={sendEmail} className={style.form}>
      <div><InputContactForm name="name" placeholder={"Name"} /></div>
      <div><InputContactForm name="email" placeholder={"Email"} /></div>
      <div><InputContactForm name="subject" placeholder={"Subject"} /></div>
      <div><TextareaContactForm name="message" placeholder={"Message"} /></div>
      <div><ButtonContactForm buttonText={"SEND"} /></div>
    </form>
  )
}

