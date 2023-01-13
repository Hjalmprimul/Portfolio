import React from "react";

import style from '../Cuerpo.module.css'

export function Titulo (props){
    return (
        <div className={style.titulo}>
            <h2>{props.titulo}</h2>
        </div>
    );
}