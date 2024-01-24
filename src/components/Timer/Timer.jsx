import React from "react";
import { SetTime } from "./SetTime";
import styleTimer from './Timer.module.css'
import timer from '../../assets/images/timer/timer_border_NSV2.png'


const Timer = ({targetDate})=>{
    let [days, hours, minutes, seconds, years, months] = SetTime(targetDate=new Date('2026-03-24 00:00:00'))
          return(
      
        <div className={styleTimer.flex__container}>
             <div className={styleTimer.flex__item}>
                   <h3 className={styleTimer.head__timer}>Лет</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                 <span className={styleTimer.descr}>{years}</span>
        </div>
             <div className={styleTimer.flex__item}>
                        <h3 className={styleTimer.head__timer}>Месяцев</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                 <span className={styleTimer.descr}>{months}</span>
             </div>
             <div className={styleTimer.flex__item}>
                        <h3 className={styleTimer.head__timer}>Дней</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                 <span className={styleTimer.descr}>{days}</span>
             </div>
             <div className={styleTimer.flex__item}>
                        <h3 className={styleTimer.head__timer}>Часов</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                 <span className={styleTimer.descr}>{hours}</span>
             </div>
             <div className={styleTimer.flex__item}>
                        <h3 className={styleTimer.head__timer}>Минут</h3>             
                <img src={timer} className={styleTimer.img__item} alt=''/>
                 <span className={styleTimer.descr}>{minutes}</span>
             </div>
             <div className={styleTimer.flex__item}>
                        <h3 className={styleTimer.head__timer}>Секунд</h3> 
                <img src={timer} className={styleTimer.img__item} alt=''/>
                 <span className={styleTimer.descr}>{seconds}</span>
             </div>
       </div>
      
    )
}

export default Timer;