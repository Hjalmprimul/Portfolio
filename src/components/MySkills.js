import React from "react";
import style from "./MySkills.module.css";

import { MySkillsTitle } from "./MySkills Components/MySkillsTitle";
import { MySkillsContent } from "./MySkills Components/MySkillsContent";

export function MySkills() {
  return (
    <div className={style.MySkills}>
        <MySkillsTitle></MySkillsTitle>
        <MySkillsContent></MySkillsContent>
    </div>
  );
}
