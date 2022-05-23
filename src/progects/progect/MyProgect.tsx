import style from './MyProgect.module.css';

type styleType = {
  backgroundImage: string;
};

export function MyProgect(props: { style: styleType; projectTitle: string; progectDescription: string; link: string }) {
  return (
    <div className={style.myProgectBlock}>
      <a href={props.link} className={style.imageContainer} style={props.style}>
        <div className={style.myProgectDescription}>
          <div>
            <div className={style.myProgectTitle}>{props.projectTitle}</div>
            <div>{props.progectDescription}</div>
          </div>
        </div>
      </a>
    </div>
  );
}
