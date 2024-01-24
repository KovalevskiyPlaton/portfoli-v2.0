import React from "react";
import styleFooter from './Footer.module.css'
import vkImage  from '../../assets/images/footer/Vk.jpg'
import telImage from '../../assets/images/footer/Tel.jpg'
import watsAppImage from '../../assets/images/footer/Wp.jpeg'

const Footer = ()=>{
    return(
        <div className={styleFooter.box__foot_container}>
                <div className={styleFooter.box__foot_items}>
                    <a href="https://vk.com/id18765086">
                        <img src={vkImage} alt=''/>
                    </a>
                </div>
                <div className={styleFooter.box__foot_items}>
                    <a href="https://t.me/Kovalevskiy_PV">
                        <img src={telImage} alt=''/>
                    </a>
                </div> 
                <div className={styleFooter.box__foot_items}>
                    <a href="https://wa.me/+79787936493">
                        <img src={watsAppImage} alt=''/>
                    </a>

                </div>             
        </div>
   )
}



export default Footer;

