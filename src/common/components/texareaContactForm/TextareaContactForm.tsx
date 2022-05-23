import style from './TextareaContactForm.module.css';

type TextareaContactFormPropsType = {
  name: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  value?: string;
  placeholder: string;
};
export const TextareaContactForm: React.FC<TextareaContactFormPropsType> = ({ ...props }) => {
  return (
    <>
      <textarea className={style.contactTextarea} {...props} />
    </>
  );
};
