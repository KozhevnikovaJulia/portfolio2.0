import style from "./ContactForm.module.scss"
import { useFormik } from "formik"
import {InputContactForm} from "../common/components/inputContactForm/InputContactForm"
import {ButtonContactForm} from "../common/components/buttonContactForm/ButtonontactForm"
import {TextareaContactForm} from "../common/components/texareaContactForm/TextareaContactForm"




export function ContactForm(props: any ) {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = "Required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.name) {
        errors.name = "Required"
      }
      if (!values.subject) {
        errors.subject = "Required"
      }
      if (!values.message) {
        errors.message = "Required"
      }
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
})

  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <div><InputContactForm name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder={"Name"} /></div>
      {formik.touched.name && formik.errors.name ? <div style={{color:"red"}}> {formik.errors.name} </div> : null}
      <div><InputContactForm name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder={"Email"} /></div>
      {formik.touched.email && formik.errors.email ? <div style={{color:"red"}}> {formik.errors.email} </div> : null}
      <div><InputContactForm name="subject" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject} placeholder={"Subject"} /></div>
      {formik.touched.subject && formik.errors.subject ? <div style={{color:"red"}}> {formik.errors.subject} </div> : null}
      <div><TextareaContactForm name="message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} placeholder={"Message"} /></div>
      {formik.touched.message && formik.errors.message ? <div style={{color:"red"}}> {formik.errors.message} </div> : null}
      <div><ButtonContactForm buttonText={"SEND"} /></div>
    </form>
  )
}

//types
type FormikErrorType = {
  name?: string
  email?: string
  subject?: string
  message?: string
}