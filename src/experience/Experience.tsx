import React from "react"
import style from "./Experience.module.scss"
import {MyExperience} from "./myExperience/MyExperience"
import {TextBlock} from "../common/components/textBlock/TextBlock"

export function Experience () {
  return (
    <div className={style.experienceBlock}>

      <div className={style.experience}>
        <h4 className={style.title}>Experience</h4>
        <MyExperience date={"2020"} description={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius dolorem iure cupiditate, qui a iusto. Saepe reiciendis dolorum dolorem impedit animi optio, dignissimos consequatur minima, illo natus sint hic!"} />
        <MyExperience date={"2017"} description={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius dolorem iure cupiditate, qui a iusto. Saepe reiciendis dolorum dolorem impedit animi optio, dignissimos consequatur minima, illo natus sint hic!"} />
        <MyExperience date={"2012"} description={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius dolorem iure cupiditate, qui a iusto. Saepe reiciendis dolorum dolorem impedit animi optio, dignissimos consequatur minima, illo natus sint hic!"} />
      </div>

      <TextBlock
        title={"Cover letter"}
        largeText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
        text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat tempora in rem quasi asperiores qui modi nihil placeat, possimus doloremque accusantium minima reprehenderit ullam laboriosam a harum delectus quae?"}
      />

    </div>
  )
}
