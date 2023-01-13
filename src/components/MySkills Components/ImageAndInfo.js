import React from "react"
import { PopUp } from "./Popup.js"
import { useState } from "react";

export function ImgAndInfo (props) {
    const [display,setDisplay] = useState("d-none")
    const pop = React.useRef(null)
    
    React.useEffect(() => {
      const posMouse = document.querySelectorAll('#img')
      posMouse.forEach(myFunction)

      function myFunction(element, index, array){
        element.addEventListener("mousemove", (evt) => {
          var mousePos = oMousePos(element, evt)
          pop.current.style.transform = `translate3d(${mousePos.x + 6}px, ${mousePos.y - 99}px, 0)`
        }, false)
        element.addEventListener("mouseout", (evt) => {
          pop.current.style.transform = ''
        })
      }
      
      function oMousePos(element, evt){
        var ClientRect = element.getBoundingClientRect()
        return {
          x: Math.round(evt.clientX - ClientRect.left),
          y: Math.round(evt.clientY - ClientRect.top),
        };
      }
    })

    return (
      <div>
        <img
          id="img"
          src={props.img}
          alt={props.alt}
          onMouseOver={() => setDisplay("d-block")}
          onMouseOut={() => setDisplay("d-none")}
        />
        <div className={display} ref={pop}>
          <PopUp name={props.name} progress={props.progress} proyects={props.proyects}></PopUp>
        </div>
      </div>
    );
}