import style from "./Menu.module.scss"
import { Link } from "react-scroll"
 



export function Menu(props:{setCurrentPage:(currentPage: string)=> void}) {
  const active=(to: string)=>{
    alert(to)
  }
 
  return (
    
    <div className={style.menu}>      
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("01")}}  to="mainBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true}>Home</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("02")}} to="skillsBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true}>Skills</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("03")}} to="progectsBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true}>Progects</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("04")}} to="experienceBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true}>Experience</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("05")}}  to="contactsBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true}>Contacts</Link></div>
      
    </div>
  )
}