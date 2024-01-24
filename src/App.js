import React,{useState } from 'react';
import './App.css';
import MyHr from './components/Hr/MyHr';
import InfoBox from './components/ContentBox/InfoBox';
import PhotoAuthor from './components/ContentBox/PhotoAuthor/PhotoAuthor';
import MyProjects from './components/MyProjects/MyProjects';
import Slider from './components/Slider/Slider';
import Timer from './components/Timer/Timer';
import { Element} from "react-scroll";
import NavBar from './components/Menu/Navbar';
import Footer from './components/Footer/Footer';




const App = ()=>{
        const [loading, setLoading] = useState(true);
        const spinner = document.getElementById('spinner')
        if(spinner){
                setTimeout(()=>{
                        spinner.style.display='none';   
                        setLoading(false);  
                }, 4000)
        }
       return (
        !loading && (
                <div className='container'> 
        <section className={'item__section_panel'}>
                <NavBar/>
        </section>
        <Element name ='section_1'><MyHr nameHeader={'Обо мне'}/></Element>
              <div className='item__section__aboutMe'>
        <section className={'item__section_panel-aboutMe'}>
                <InfoBox/>
        </section>
       <section className={'item__section_panel-myPhoto'}>
                <PhotoAuthor/>
        </section>
              </div>
              <Element name ='section_2'><MyHr nameHeader={'Мои работы (портфолио)'}/></Element>
        <section className='item__section_panel-projects'>
                <MyProjects/>
        </section>
                <Element name ='section_3'><MyHr nameHeader={'Мой стек'}/></Element>
           <section className={'item__section_panel-stack'}>
                <Slider/>
        </section>
        <Element name ='section_4'><MyHr nameHeader={'Таймер: до ухода в IT осталось '}/></Element>
        <section className={'item__section_panel-timer'}>
                  <Timer/>
        </section>
        <Element name ='section_5'><MyHr nameHeader={'Контакты'}/></Element>     
        <section className={'item__section_footer'}>
                <Footer/>
        </section>      
      </div>
        )
         
  );
}



export default App;
