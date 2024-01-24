import React from "react";
import { useState } from "react";
import styled from 'styled-components'
import RightNav from "./RightNav";


const StyleBurger = styled.div`
width: 2rem;
height:2rem;
position:fixed;
top:0;
right:60px;
justify-content: space-around;
flex-flow: column nowrap;
z-index:5000;
display:none;

@media(max-width:1563px){
  display: flex;
}

@media(max-width:802px){
  {
     right:10%;
     }
}
@media(max-width:774px){
  {
     right:15%;
     }
}

@media(max-width:774px){
  {
     right:20%;
     }
}

@media(max-width:664px){
  {
     right:25%;
     }
}
@media(max-width:600px){
  {
     right:35%;
     }
}
@media(max-width:528px){
  {
     right: 20%;
     }
}



div{
    
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open})=> open? '#ccc':'#000000'}};
    border-radius: 10px;
    transform-origin: 2px;
    
}`;

const Burger = ()=>{
    const [open, setOpen]=useState(false)
    return(
        <>
            <StyleBurger open={open} onClick={()=>setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyleBurger>    
        <RightNav open={open}/>
        </>      
   )
}



export default Burger;