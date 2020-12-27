import React from 'react';
import style from "./Footer.module.css"
import {FooterElement} from "./FooterElement"

export function Footer() {
  return (

    <div className={style.footerBlock}>

      <div className={style.container}>

        <div className={style.title}>
          <h2 >Юлия Кожевникова</h2>
        </div>
        <div className={style.footerElementsContainer}>
          <FooterElement />
          <FooterElement />
          <FooterElement />
          <FooterElement />
        </div>

        <div className={style.text}>
          <h2 >2020 Все права защищены</h2>
        </div>

      </div>

    </div>)
   
}

