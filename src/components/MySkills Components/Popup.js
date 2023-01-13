import React from "react"
import style from '../MySkills.module.css'

import { ProgressBar } from "react-bootstrap"
import listar from './proyects'

export function PopUp(props) {
    const proyectos = listar(props.proyects)
    const list = proyectos.map((proyectos) => 
        <li key={proyectos}>{proyectos}</li>
    )
    
    return (
      <div className={style.popUp}>
        <div className={style.indicador}></div>
        <p className={style.name}>{props.name}</p>
        <ProgressBar
          className={style.progressBar}
          animated
          now={props.progress}
          label={`${props.progress}%`}
        ></ProgressBar>
        <div className={proyectos.length === 0 ? "d-none" : "d-block"}>
          <p className={style.proyectos}>Proyectos:</p>
        </div>
        <ul className={style.ul}>{list}</ul>
      </div>
    );
}