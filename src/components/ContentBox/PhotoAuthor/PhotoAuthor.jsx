import React from "react";
import stylePhoto from './PhotoAuthor.module.css'
import photo from '../../../assets/images/myPhoto/GP.png'
import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";


const PhotoAuthor = ()=>{
    const [show, setShow] = useState(false)
    useEffect(() => {
        const timerModal = setTimeout(() => {
                setShow(true)
        }, 7000);
        return () => clearTimeout(timerModal);
      },[]);
    return(
        <div className={stylePhoto.container__myPhtoto}>
            <img src={photo} alt='' className={stylePhoto.myPhtoto}/>
            <Modal onClose={()=>setShow(false)} show={show}/>
                <button onClick={()=>setShow(true)}>Открыть модальное окно</button>
        </div>
    )
}

export default PhotoAuthor;