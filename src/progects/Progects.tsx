import React from "react"
import style from "./Progects.module.scss"
import {MyProgect} from "./progect/MyProgect"
import socialNetworkImage from "../assets/image/cyrus-gomez-pYdqyf4uMUA-unsplash.jpg"
import todolistImage from "../assets/image/jess-bailey-94Ld_MtIUf0-unsplash.jpg"
import counterImage from "../assets/image/varun-gaba-CTwQRjGDZjU-unsplash.jpg"

export function Progects() {
  const socialNetwork = {
    backgroundImage: `url(${socialNetworkImage})`
  };
  const todolist= {
    backgroundImage: `url(${todolistImage})`
  };
  const counter= {
    backgroundImage: `url(${counterImage})`
  };
  return (
    <div id={"progectsBlock"} className={style.progectsBlock}>    
        <div className={style.progects}>
          <MyProgect link={"https://kozhevnikovajulia.github.io/SocialNetwork/"} style={socialNetwork}
           projectTitle = {"Social Network"} progectDescription={"SPA using: TypesScript, React, Redux, Storybook, Axios, React-Thunk, React-redux, React-Router, React-Form, React-hooks, SCSS"} />
          <MyProgect link={"https://kozhevnikovajulia.github.io/TodoList/"} style={todolist}
            projectTitle = {"Todo List"} progectDescription={"SPA using: TypesScript, React, Redux, ReduxToolkit, Material-UI, Storybook, Axios, React-Thunk, React-redux, React-Router, Formik, React-hooks"} />
          <MyProgect link={"https://kozhevnikovajulia.github.io/CounterNight/"} style={counter}
            projectTitle = {"Counter"} progectDescription={"SPA using: TypesScript, React, Redux"} />
        </div>     
    </div>
  )
}

