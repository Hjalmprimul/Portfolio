import React, { useState } from "react"

import Name from './Head Components/Name.js'
import LastName from './Head Components/LastName.js'
import Profession from './Head Components/Profession.js'

import style from '../components/Head.module.css'
import { useEffect } from "react"

export function Head () {
    const h = style.head
    const hF = style.headFixed

    const s = style.space
    const sF = style.spaceFixed

    const [head, setHead] = useState(h)
    const [space, setSpace] = useState(s)

    useEffect(() => {
        window.addEventListener('scroll', stickBar)

        return () => {
            window.removeEventListener('scroll', stickBar)
        }
    })

    const stickBar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY
            windowHeight > 80 ? setHead(hF) : setHead(h)
            windowHeight > 80 ? setSpace(sF) : setSpace(s)
        }
    }
    return (
      <div>
        <div className={head}>
          <div>
            <LastName></LastName>
            <Name></Name>
          </div>
          <div>
            <Profession></Profession>
          </div>
        </div>
        <div className={space}></div>
      </div>
    );
}