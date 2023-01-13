import React from "react";

import style from './Cuerpo.module.css'

import {MySkills} from './MySkills'
import {Contact}  from './Cuerpo Components/Contact'
import {RedesSociales} from './Cuerpo Components/RedesSociales'

export function Cuerpo() {
    return (
        <div className={style.cuerpo}>
            <MySkills></MySkills>
            <div>
                <Contact></Contact>
                <RedesSociales></RedesSociales>
            </div>
        </div>
    );
}