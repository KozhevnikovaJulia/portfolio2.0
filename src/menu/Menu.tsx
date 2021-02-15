import style from "./Menu.module.scss"
import { Link } from "react-scroll"
 



export function Menu(props:{setCurrentPage:(currentPage: string)=> void,  menuModeToggle: () => void}) {
  const active=(to: string)=>{
    alert(to)
  }
 
  return (
    
    <div className={style.menu}>      
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("01")}}  to="mainBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true} onClick={props.menuModeToggle}>Home</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("02")}} to="skillsBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true} onClick={props.menuModeToggle}>Skills</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("03")}} to="progectsBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true} onClick={props.menuModeToggle}>Progects</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("04")}} to="experienceBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true} onClick={props.menuModeToggle}>Experience</Link></div>
      <div><Link activeClass = {style.active} onSetActive={()=>{props.setCurrentPage("05")}}  to="contactsBlock" spy={true} smooth={true} offset={50} duration={500} hashSpy={true} onClick={props.menuModeToggle}>Contacts</Link></div>
      
    </div>
  )
}