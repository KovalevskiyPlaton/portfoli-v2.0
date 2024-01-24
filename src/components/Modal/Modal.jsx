import React from "react"
import modalImage from '../../assets/images/modal/Img_modal.png'
import './modal.css'
 

const Modal =(props) =>{
            if(!props.show){
            return null
        }
    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                <button onClick={props.onClose}>&times;</button> 
                        <h3>Информационная карта сайта</h3>
                </div>  
                <div className="modal-body">
                    <img src={modalImage} alt=""/>
                    <p>Данная страница содержит в себе 5 основных блоков. Информация обо мне и моей деятельности,
                                мои работы (портфолио). Также автор попытался креативно продемонстрировать навыки работы с объектом Data.
                                Стeк (основы) технологий, которые изучались самостоятельно с 11.2020, реализованы в слайдере (см. Раздел Мой стек).
                                Завершающий блок - "Контакты", расположенный внизу сайта.</p>
                </div>
            </div>
        </div>
 
  

    
    
    )
}

export default Modal