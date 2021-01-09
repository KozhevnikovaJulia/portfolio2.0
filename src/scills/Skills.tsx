import React from 'react';
import style from "./Skills.module.css"
import {MySkill} from "./skill/MySkill"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'

export function Skills () {
  return (
    <div className={style.skillsBlock}>

      <div className={style.skills}>
        <MySkill  icon = {<FontAwesomeIcon icon={faHtml5 } size="4x"  />} title={"HTML, CSS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores."} />
        <MySkill icon={<FontAwesomeIcon icon={faJs } size="4x"  />} title={"Java Script"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores."} />
        <MySkill icon={<FontAwesomeIcon icon={faHtml5 } size="4x"  />} title={"Type Script"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores."} />
        <MySkill icon={<FontAwesomeIcon icon={faReact} size="4x" />} title={"React, Redux"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores."} />
      </div>

      <div className={style.services}>
        <h4 className={style.title}>Services</h4>
        <p className={style.bigText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?</p>
        <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?</p>
        <div className={style.buttonDownloadWrapper} >
          <button className={style.button }>Downland CV</button>
        </div>
        <div>
          <button className={style.button} >Check my portfolio</button>
        </div>

      </div>

    </div>
  )
}
