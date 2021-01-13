import style from "./TextareaContactForm.module.scss"
import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type TextareaContactFormPropsType = DefaultTextareaPropsType & { 
      input: any,
      meta: any
}

export const TextareaContactForm: React.FC<TextareaContactFormPropsType> = ({input, meta, ...props}) => {   
    return (
        <div>
           <textarea className={style.contactTextarea}{...props} {...input} />
           {meta.touched && meta.ivalid && <span>{meta.error}</span>}
        </div>

    )
}
