import React from 'react';
import style from './Experience.module.css';
import { MyExperience } from './myExperience/MyExperience';
import { TextBlock } from '../common/components/textBlock/TextBlock';

export function Experience() {
  return (
    <div id={'experienceBlock'} className={style.experienceBlock}>
      <div className={style.experience}>
        <h4 className={style.title}>Experience</h4>
        <MyExperience date={' may 2021-'} title={'Front-end developer Media Instinct Group'} description={'Web-development (frontend) of internal products of the company. Interaction with a backend developer (python). Participation in the development of architecture, technical solutions. Carrying out other tasks assigned by the manager.'} />
        <MyExperience date={'2021'} title={'Front-end developer(freelance)'} description={'Layout of modular CSS in Redux. Connecting and using Redux-Form. Writing unit tests. Migrating a React application to typeScript. Creating new components. Adding features.'} />
        <MyExperience date={'2020'} title={'IT-kamasutra'} description={"Development of applications in 'IT-kamautra' 'Social-network' and 'ToDoList' on the React using Redux, Thunk, ReduxForm, Axios and React-Router"} />
        <MyExperience date={'2012-2020'} title={"Military Prosecutor's Office of the Central Military District."} description={"Professional psychological selection for determining the suitability of candidates for passing service (work) in the military prosecutor's office"} />
      </div>

      <TextBlock title={'Cover letter'} largeText={'I am a result-oriented front-end developer with experience in creating landing pages, SPA using HTML, CSS, TS, React, Redux. I have skills like independent and team work. Ready consider options for corporate work.'} text={''} />
    </div>
  );
}
