import React from 'react';
import './App.css';
import { Contacts } from './contacts/Contacts';
import {Header} from "./header/Header"
import {Main} from "./main/Main"
import { Progects } from './progects/Progects';
import {Skills} from "./scills/Skills";
import {Experience} from "./experience/Experience";
import {Nav} from "./nav/Nav"

export function App() {
  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
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



