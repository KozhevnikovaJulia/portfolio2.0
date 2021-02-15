import style from "./InputContactForm.module.scss"


type InputContactFormPropsType = {
    name: string
    onChange?: (e: any) => void
    onBlur?: (e: any) => void
    value?: string
    placeholder: string
    meta?: any
}
export const InputContactForm: React.FC<InputContactFormPropsType> = ({ meta, ...props }) => {

    return (
        <>
            <input className={style.contactInput} {...props} />
        </>

    )
}

