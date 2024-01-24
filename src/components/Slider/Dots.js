import React from "react";

const Dots = ({activeIndex, onClick, imageSlider})=>{
    return (
    <div className="all-dots">
        {imageSlider.map((slide, index)=>(<div key={index} className={`${activeIndex === index?'dot active-dot': 'dot'}`} 
        onClick={()=> onClick(index)}
        ></div>))}
    </div>
    )
}

export default Dots