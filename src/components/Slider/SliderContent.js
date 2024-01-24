import React from "react";



const  SliderContent = ({activeIndex, imageSlider})=> {
    return(
        <section>
            {imageSlider.map((slide, index)=>(
                <div key={index} className={index === activeIndex? 'slides active': 'inactive'
            }>
                <img className="slide-image" src={slide.urls} alt=''></img>
            </div>
            ))}
            
        </section>
    );
}

export default SliderContent;  