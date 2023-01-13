import React, {useEffect} from "react";
import style from '../Head.module.css'
import Typed from "typed.js";

export default function Profession () {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "DESARROLLADOR FRONT-END",
        "DESARROLLADOR BACK-END",
        "CURRENTLY LEARNING M-E-R-N",
      ],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 75,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1000,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: '|',
      contentType: 'html'
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  });

    return (
      <div className={style.profession}>
        <h1 >
          <span ref={el}></span>
        </h1>
      </div>
    );
}