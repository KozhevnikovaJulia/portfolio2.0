import style from "./ContactForm.module.scss"
import { reduxForm, Field } from "redux-form"
import {InputContactForm} from "../common/components/inputContactForm/InputContactForm"
import {ButtonContactForm} from "../common/components/buttonContactForm/ButtonontactForm"
import {TextareaContactForm} from "../common/components/texareaContactForm/TextareaContactForm"
import {requiredValidate, maxLengthValidate} from "../common/validate/validate"




export function ContactForm(props: any ) {
  return (
        <form onSubmit={props.handleSubmit} className={style.form}>
           <div> <Field name="name" component={InputContactForm} type="text"  placeholder={"Name"} validate={[requiredValidate]} /></div>   
           <div> <Field name="email" component={InputContactForm} type="text"  placeholder={"Email"} validate={[requiredValidate]}/></div>   
           <div> <Field name="subject" component={InputContactForm} type="text"  placeholder={"Subject"} validate={[requiredValidate]}/></div>   
           <div> <Field name="message" component={TextareaContactForm} type="text"  placeholder={"Message..."} validate={[requiredValidate]}/></div>   
           <div><ButtonContactForm buttonText={"SEND"} /></div>
        </form>       
  )
}

export const ContactReduxForm = reduxForm({
  form: 'contact'
})(ContactForm)