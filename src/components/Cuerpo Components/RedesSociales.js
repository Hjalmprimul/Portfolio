import React from "react";

import images from '../../assets/image/image.js'
import style from '../Cuerpo.module.css'

import { Titulo } from "./Titulo.js";
import { Datos } from './Datos'

export function RedesSociales (){
    return (
      <div className={style.contact}>
        <Titulo titulo="REDES SOCIALES"></Titulo>
        <div className={style.contWrapper}>
          <Datos
            dato="@EzequiAguirre"
            img={images.twitter}
            alt="twitter img"
          ></Datos>
          <Datos
            dato="AguirreLucas // SHA43 #8371"
            img={images.discord}
            alt="discord img"
          ></Datos>
          <Datos
            dato="linkedin.com/in/lucas-ezequiel-aguirre/"
            img={images.linkedin}
            alt="twitter img"
          ></Datos>
          <Datos
            dato="aguirre_lucas97"
            img={images.instagram}
            alt="instagram img"
          ></Datos>
          <Datos
            dato="github.com/Hjalmprimul"
            img={images.github}
            alt="github img"
          ></Datos>
        </div>
      </div>
    );
}