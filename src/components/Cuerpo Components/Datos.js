import React from "react";

import style from '../Cuerpo.module.css'

export function Datos (props){
    return (
        <div className={style.pares}>
            <img src={props.img} alt={props.alt} />
            <p>{props.dato}</p>
        </div>
    );
}