import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import styleMenu from './Menu.module.css'

const Ul = styled.ul`
    background: linear-gradient(to right, #312b2a, #e0ddd3);
    width:100%;
    list-style:none;
    height: 90px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-radius:0px 0px 10px 10px;
    

@media(max-width:1563px){
    flex-flow: column nowrap;
    position:fixed;
    transform:${({open})=>open?'translateX(0)':'translateX(100%)'};
    top:0;
    right:0;
    height: 500px;
    background: rgba(13,57,56,0.5);
    width: 300px;
    padding-top: 3.5rem;
    z-index: 3000;
   
}    
@media(max-width:1260px){
    height:300px;
    width:150px;
}    
  
  
`;

const RightNav = ({open})=>{
    return(
        
            <Ul open={open}>
                <li>
                    <Link to='section_1' spy={true} smooth={true} offset={50} duration={2800}>
                        <div className={styleMenu.box__item}>
                            <p>Обо мне</p>
                        </div>
                </Link>
            </li>
                <li>
                    <Link to='section_2' spy={true} smooth={true} offset={50} duration={2800}>
                        <div className={styleMenu.box__item}>
                            <p>Мои работы</p>
                        </div>
                </Link>
            </li>
                <li>
                    <Link to='section_3' spy={true} smooth={true} offset={50} duration={2800}>
                        <div className={styleMenu.box__item}>
                            <p>Мой стек</p>
                        </div>
                </Link>
            </li>
                <li>
                    <Link to='section_4' spy={true} smooth={true} offset={50} duration={2800}>
                        <div className={styleMenu.box__item}>
                            <p>Таймер</p>
                        </div>  
                </Link>
            </li>
                <li>
                <Link to='section_5' spy={true} smooth={true} offset={50} duration={2800}>
                    <div className={styleMenu.box__item}>
                        <p>Контакты</p>
                    </div>
                </Link>
            </li>
           </Ul>
                    
            
      
    )
}



export default RightNav;