import React from "react";
import styleCards from './MyProjects.module.css'
import card_1 from '../../assets/images/cards/card_1.jpg'
import card_2 from '../../assets/images/cards/card_2.png'
import card_3 from '../../assets/images/cards/card_3.png'
import card_4 from '../../assets/images/cards/card_4.png'
import card_5 from '../../assets/images/cards/card_5.png'
import card_6 from '../../assets/images/cards/card_6.png'
import card_7 from '../../assets/images/cards/card_7.png'


const MyProjects = ()=>{
    var classNames = require('classnames')
    const StyleClassContainer = classNames(styleCards.imgCard, styleCards.card__style)
    const DescrAndImage = classNames(styleCards.imgCard, styleCards.descr)
    return(
        <div className={styleCards.card__container}>
            <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/projectBuisnessCard'>
            <img src={card_1} alt='' className={StyleClassContainer}/> {/*Визитная карточка*/}
                        <span className={DescrAndImage}>
                            <h2>Работа с элементами DOM</h2>
                            <strong> Сайт - визитная карточка</strong>
                            </span>
                        </a>
                    </div> 
        </div>
        <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/projectRentalCar.git'>
            <img src={card_2} alt='' className={StyleClassContainer}/> {/*Аренда машин*/}
                        <span className={DescrAndImage}>
                            <h2>Верстка с нуля</h2>
                            <strong>Сайт - Аренда машин</strong>
                            </span>
                        </a>
                    </div> 
        </div>
        <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/Project-Iphone-sale.git'>
            <img src={card_3} alt='' className={StyleClassContainer}/> {/*Iphone 13*/}
                        <span className={DescrAndImage}>
                            <h2>Работа с элементами DOM</h2>
                            <strong>Сайт - продажа Iphone 13</strong>
                            <p/>
                        </span>
                        </a>
                    </div> 
        </div>
        <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/Project-React-app-Poster.git'>
            <img src={card_4} alt='' className={StyleClassContainer}/> {/*Постер*/}
                        <span className={DescrAndImage}>
                            <h2>Работа с библиотекой React</h2>
                            <strong>ПОСТЕР</strong>
                            </span>
                        </a>
                    </div> 
        </div>
        <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/project-food-delivery.git'>
            <img src={card_5} alt='' className={StyleClassContainer}/> {/*Доставка еды*/}
                        <span className={DescrAndImage}>
                            <h2>Верстка с нуля</h2>
                            <strong>Сайт - доставка еды</strong>
                            </span>
                        </a>
                    </div> 
        </div>
        <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/SassTools'>
            <img src={card_6} alt='' className={StyleClassContainer}/> {/*SASS -  разедл*/}
                        <span className={DescrAndImage}>
                            <h2>Технология SASS</h2>
                            <strong>Вспомогательный инструмент web-разработки по типу bootstrap</strong>
                            </span>
                        </a>
                    </div> 
        </div>
        <div className={styleCards.item__card_container}>
                    <div className={styleCards.card__item}>
                        <a href='https://github.com/KovalevskiyPlaton/Adder'>
            <img src={card_7} alt='' className={StyleClassContainer}/> {/*Добавлятель*/}
                        <span className={DescrAndImage}>
                            <h2>Добавлятель</h2>
                            <strong>Быстрый курс TypeScript+React</strong>
                            </span>
                        </a>
                    </div> 
        </div>
            
   </div>
   
    
    
    
    
    
    
    
    
    
    
      
    )
}

export default MyProjects;