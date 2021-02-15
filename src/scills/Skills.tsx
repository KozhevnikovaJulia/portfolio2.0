import React from "react"
import style from "./Skills.module.scss"
import {MySkill} from "./skill/MySkill"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import {Button} from "../common/components/button/Button"
import { Link } from "react-scroll"
// @ts-ignore
import MyPDF from "../assets/pdf/cv.pdf"

export function Skills () {
  return (
    <div id={"skillsBlock"} className={style.skillsBlock}>

      <div className={style.skills}>
        <MySkill icon={<FontAwesomeIcon icon={faHtml5} size="4x" />} title={"HTML, CSS"} description={""} />
        <MySkill icon={<FontAwesomeIcon icon={faJs} size="4x" />} title={"Java Script"} description={""} />
        <MySkill icon={<FontAwesomeIcon icon={faHtml5} size="4x" />} title={"Type Script"} description={""} />
        <MySkill icon={<FontAwesomeIcon icon={faReact} size="4x" />} title={"React, Redux"} description={""} />
      </div>
  
      <div className={style.services}>
        <h4 className={style.title}>My skills</h4>
        <p className={style.largeText}>Technical skills: Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model. Thorough understanding of React.js and its core principles. Prior experience with popular React.js workflows (Redux). Familiarity with RESTful APIs. Familiarity with HTML / CSS. Familiarity with code versioning tools (Git). </p>
        <p className={style.text}>Non-technical skills: team player, excellent time-management skills, great interpersonal and communication skills.</p>
        <div className={style.buttonDownloadWrapper} >
          <a href={MyPDF} download="cv_Kozhevnikova_frontend.pdf"> <Button buttonText={"Downland CV"} /> </a>
        </div>
        <Link activeClass="active" to="progectsBlock" spy={true} smooth={true} offset={50} duration={500}><Button buttonText={"Check my portfolio"} /></Link>
      </div>

    </div>
  )
}
