import React, { useState } from "react"
import "./App.css"
import { Contacts } from "./contacts/Contacts"
import {Header} from "./header/Header"
import {Main} from "./main/Main"
import { Progects } from "./progects/Progects"
import {Skills} from "./scills/Skills"
import {Experience} from "./experience/Experience"
import {Nav} from "./nav/Nav"

export function App() {
  let [menuMode, setMenuMode] = useState<boolean>(false)
  let [currentPage, setCurrentPage] = useState<string>("01")

  const menuModeToggle = () => {
    setMenuMode(!menuMode)
  }
  return (
    <div className="App">
    <Nav menuModeToggle={menuModeToggle} currentPage={currentPage} setCurrentPage={setCurrentPage} menuMode={menuMode}/>
        {!menuMode && <Header menuModeToggle={menuModeToggle} currentPage={currentPage} />}

      <div className="contant">

        
          <Main />
          <Skills />
          <Progects />
          <Experience />
          <Contacts />
       

      </div>

    </div>
  )
}



