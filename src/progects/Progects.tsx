import React from "react";
import style from "./Progects.module.css";
import {MyProgect} from "./progect/MyProgect";
import socialNetworkImage from "../assets/image/cyrus-gomez-pYdqyf4uMUA-unsplash.jpg";
import todolistImage from "../assets/image/jess-bailey-94Ld_MtIUf0-unsplash.jpg";

export function Progects() {
  const socialNetwork = {
    backgroundImage: `url(${socialNetworkImage})`
  };
  const todolist= {
    backgroundImage: `url(${todolistImage})`
  };
  
  return (
    <div className={style.progectsBlock}>       

        <div className={style.progects}>
          <MyProgect style={socialNetwork} purposeProject = {"Social Network."} briefDescription={"Используйте наш бесплатный переводчик с английского на русский и переводите ваши тексты онлайн."} />
          <MyProgect style={todolist} purposeProject = {"Todo List"} briefDescription={"Используйте наш бесплатный переводчик с английского на русский и переводите ваши тексты онлайн."} />
          <MyProgect style={todolist} purposeProject = {"Todo List"} briefDescription={"Используйте наш бесплатный переводчик с английского на русский и переводите ваши тексты онлайн."} />
        </div>     
    </div>
  )
}

