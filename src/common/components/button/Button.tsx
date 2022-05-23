import React from 'react';
import style from './Button.module.css';

export const Button = (props: { buttonText: string}) => {
  return (
    <div>
      <button className={style.button}>{props.buttonText}</button>
    </div>
  );
}
