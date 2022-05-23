import style from './MyExperience.module.css';

export function MyExperience(props: { date: string; description: string; title: string }) {
  return (
    <div className={style.timeLineHolder}>
      <div className={style.timeLineEvent}>
        <span className={style.circle}></span>
        <div className={style.timeLineEventContent}>
          <b>{props.title}. </b>
          <span>{props.description}</span>
        </div>
        <div className={style.timeLineEventDate}>{props.date}</div>
      </div>
    </div>
  );
}
