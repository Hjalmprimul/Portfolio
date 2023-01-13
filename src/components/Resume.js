import React from "react";

import {AboutMe} from "./Resume Components/AboutMe";
import {AboutMeTitle} from "./Resume Components/AboutMeTitle";

import style from './Resume.module.css'


export function Resume() {
  
  return (
    <div className={style.resume}>
      <AboutMeTitle></AboutMeTitle>
      <AboutMe></AboutMe>
      <div className={style.inThisPage}>
        
      </div>
    </div>
  );
}
