import React from 'react';
import SliderContent from './SliderContent';
import imageSlider from './imageSlider';
import Arrows from './Arrows';
import { useState } from 'react';
import Dots  from './Dots';
import './slider.css';
import { useEffect } from 'react';

const len = imageSlider.length-1


const Slider = ()=>{
    const [activeIndex, setActiveIndex]= useState(0)
    const updateIndex = (newIndex)=>{
        newIndex = activeIndex === len ? 0 : activeIndex+1;
        setActiveIndex(newIndex)
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            updateIndex(activeIndex+1)
        }, 1600)
        return ()=>{
            if(interval){
                clearInterval(interval)
            }
        }
    })

    return(
        <div className='slider-container'>
                <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
                <Arrows  prevSlide={()=> setActiveIndex(activeIndex<1 ? len:activeIndex-1)
                }
                nextSlide={()=> setActiveIndex(activeIndex === len ? 0 : activeIndex+1)
                }
                />
                <Dots activeIndex={activeIndex} 
                imageSlider={imageSlider} 
                onClick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;