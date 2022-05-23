import style from './Main.module.css';
import myPhotoImage from '../assets/image/7.jpg';
import ReactTypingEffect from 'react-typing-effect';

export function Main() {
  const myPhoto = {
    backgroundImage: `url(${myPhotoImage})`,
  };
  return (
    <div id={'mainBlock'} className={style.mainBlock}>
      <div className={style.mainText}>
        <div className={style.hello}>Hello. My name is</div>
        <ReactTypingEffect text={'Julia'} className={style.name} />
        {/* <h1 className={style.name}>Julia</h1> */}
        <p>I'm a result-oriented front-end developer with experience in creating landing pages, SPA using HTML, CSS, TS, React, Redux. I have skills like independent and team work. Ready consider options for corporate work.</p>
      </div>
      <div className={style.mainPhoto} style={myPhoto}></div>
    </div>
  );
}
