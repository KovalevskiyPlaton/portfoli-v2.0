import React from "react";
import styleHr from './MyHr.module.css'


const MyHr = ({nameHeader})=>{
    
    return(
        <div className={styleHr.hrContainer}>
            <header className={styleHr.headerSetting}>
                <h2 className={styleHr.nameHeader}>{nameHeader}</h2>
            </header>
            <hr className={styleHr.myHr}/>
          </div>
    )
}

export default MyHr;