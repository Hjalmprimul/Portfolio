import React from "react";
import style from "../MySkills.module.css";
import images from '../../assets/image/image'

import { ImgAndInfo } from './ImageAndInfo.js'

export function MySkillsContent() {
  return (
    <div className={style.content}>
      <h3>Web</h3>
      <div className={style.paleta}>
        <ImgAndInfo
          img={images.icss}
          name="Css"
          progress={90}
          alt="Icon Css"
          proyects="css"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.sass}
          name="Sass"
          progress={60}
          alt="Icon Sass"
          proyects="sass"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.bootstrap}
          name="Bootstrap"
          progress={90}
          alt="Icon Bootstrap"
          proyects="bootstrap"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.ihtml}
          name="Html"
          progress={100}
          alt="Icon Html"
          proyects="html"
        ></ImgAndInfo>
      </div>
      <h3>Lenguajes</h3>
      <div className={style.paleta}>
        <ImgAndInfo
          img={images.python}
          name="Python"
          progress={80}
          alt="Icon Python"
          proyects="python"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.java}
          name="Java"
          progress={90}
          alt="Icon Java"
          proyects="java"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.js}
          name="JavaScript"
          progress={80}
          alt="Icon Js"
          proyects="js"
        ></ImgAndInfo>
      </div>
      <h3>Frameworks</h3>
      <div className={style.paleta}>
        <ImgAndInfo
          img={images.react}
          name="React"
          progress={60}
          alt="Icon React"
          proyects="react"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.vue}
          name="Vue"
          progress={80}
          alt="Icon Vue"
          proyects="vue"
        ></ImgAndInfo>
      </div>
      <h3>Graficas</h3>
      <div className={style.paleta}>
        <ImgAndInfo
          img={images.canva}
          name="Canva"
          progress={90}
          alt="Icon Canva"
          proyects="canva"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.figma}
          name="Figma"
          progress={60}
          alt="Icon Figma"
          proyects="figma"
        ></ImgAndInfo>
      </div>
      <h3>Datos</h3>
      <div className={style.paleta}>
        <ImgAndInfo
          img={images.mysql}
          name="MySql"
          progress={70}
          alt="Icon MySql"
          proyects="mysql"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.mongo}
          name="MongoDB"
          progress={50}
          alt="Icon Mongo"
          proyects="mongo"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.sqlite}
          name="Sqlite"
          progress={90}
          alt="Icon Sqlite"
          proyects="sqlite"
        ></ImgAndInfo>
      </div>
      <h3>Otras</h3>
      <div className={style.paleta}>
        <ImgAndInfo
          img={images.docker}
          name="Docker"
          progress={50}
          alt="Icon Docker"
          proyects="docker"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.git}
          name="Git"
          progress={70}
          alt="Icon Git"
          proyects="git"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.github}
          name="GitHub"
          progress={90}
          alt="Icon GitHub"
          proyects="github"
        ></ImgAndInfo>
        <ImgAndInfo
          img={images.office}
          name="Microsoft Office"
          progress={95}
          alt="Icon Microsoft-Office"
          proyects="office"
        ></ImgAndInfo>
      </div>
    </div>
  );
}
