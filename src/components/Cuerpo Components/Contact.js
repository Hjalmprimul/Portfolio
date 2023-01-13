import React from "react";

import style from '../Cuerpo.module.css'
import images from '../../assets/image/image'

import { Titulo } from './Titulo.js'
import { Datos } from './Datos.js'

export function Contact (){
    return (
      <div className={style.contact}>
        <Titulo titulo='CONTACTO'></Titulo>
        <div className={style.contWrapper}>
          <h3>Email</h3>
          <div className="mb-4">
            <Datos
              dato="lucasezequielaguirre97@gmail.com"
              img={images.gmail}
              alt="gmail img"
            ></Datos>
            <Datos
              dato="aguirrelucas2017@outlook.es"
              img={images.outlook}
              alt="outlook img"
            ></Datos>
          </div>
          <h3>Telefono</h3>
          <div>
            <Datos
              dato="+54 9 299 411-5095"
              img={images.whatsapp}
              alt="whatsapp img"
            ></Datos>
            <Datos
              dato="+54 9 11 6156-5346"
              img={images.whatsapp}
              alt="whatsapp img"
            ></Datos>
          </div>
        </div>
      </div>
    );
}