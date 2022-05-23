import style from './Contacts.module.css';
import { TextBlock } from '../common/components/textBlock/TextBlock';
import { ContactForm } from './ContactForm';

export function Contacts(props: any) {
  return (
    <div id={'contactsBlock'} className={style.contactsBlock}>
      <TextBlock
        title={'Get In Touch'}
        largeText={"If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form or send an email to Kozhevnikova1501@yandex.ru and ~let's talk."}
        text={''}
      />
      <div className={style.contacts}>
        <ContactForm />
        <div></div>
      </div>
    </div>
  );
}
