import React from 'react';

import style from './App.module.css'

import { Helmet } from "react-helmet";

import {Head} from "./components/Head.js";
import {Resume} from "./components/Resume.js"
import {Cuerpo} from "./components/Cuerpo.js"
import {Fondo} from './components/Fondo.js'


function App() {
  return (
    <div>
      <Fondo></Fondo>
      <div className={style.app}>
        <Head></Head>
        <Resume></Resume>
        <Cuerpo></Cuerpo>
        <Helmet>
          <script
            src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
            type="typed/javascript"
          ></script>
        </Helmet>
      </div>
    </div>
  );
}

export default App;