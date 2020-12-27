import React from 'react';
import './App.css';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';
import {Header} from "./header/Header"
import {Main} from "./main/Main"
import { Progects } from './progects/Progects';
import {Skills} from "./skills/Skills";

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills/>
      <Progects/>
      <Contacts/>
    </div>
  )
}



