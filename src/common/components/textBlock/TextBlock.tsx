import style from "./TextBlock.module.scss"

export function TextBlock(props:{title: string, largeText: string, text: string}) {
  return (
        <div className={style.textBlockWrapper}>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.largeText}>{props.largeText}</p>
            <p>{props.text}</p>
        </div>

    )
}