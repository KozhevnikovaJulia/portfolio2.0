import style from "./InputContactForm.module.scss"
import React, {DetailedHTMLProps, InputHTMLAttributes} from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputContactFormPropsType= DefaultInputPropsType & { 
      error?: string
      meta: any
      input: any
}

export const InputContactForm: React.FC<InputContactFormPropsType> = ({error, meta, input, ...props}) => {
    return (
        <div>
           <input className={style.contactInput}{...props} {...input} />
           {meta.touched && meta.invalid && <span>{meta.error}</span>}
        </div>

    )
}

