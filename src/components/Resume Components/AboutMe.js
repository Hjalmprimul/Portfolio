import React from "react";

import style from "../Resume.module.css";


export function AboutMe() {
  return (
    <div className={style.aboutMe}>
      <p>
        Mi nombre es Lucas soy Estudiante de licenciatura en ciencias de la computación, Me encanta 
        desarrollar el Front-End y tambien me gusta mucho la logica del Back-End, por esto hice varios
        cursos de lenguajes como Python + Sqlite, JavaScript, HTML, CSS y de Frameworks como
        Vue y React. Me sigo capacitando a diario para mejorar como profesional y como persona.
      </p>
    </div>
  );
}