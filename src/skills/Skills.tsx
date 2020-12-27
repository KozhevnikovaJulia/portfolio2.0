import React from 'react';
import style from "./Skills.module.css"
import {MySkill} from "./skill/MySkill"

export function Skills () {
  return (
    <div className={style.skillsBlock}>

      <div className={style.container}>
        <div className={style.title}>
        <h4 >SKILLS</h4>
        </div>
        
        
        
        <div className={style.skills}>
          <MySkill title={"HTML"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, unde commodi beatae repellat hic?"}/>
          <MySkill  title={"JS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt officia atque, vitae cum saepe." }/>
          <MySkill  title={"REACT"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita velit praesentium magnam hic maiores?"}/>
        </div>
      </div>

    </div>
  )
}

