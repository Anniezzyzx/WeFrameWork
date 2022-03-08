import React from 'react'
import HeaderImg from '../img/header.png'
import Intro from '../img/intro.png'

export default function header() {
    return (
       
            <div className="wraper">
            
                <h1>We<br/>Framework</h1>
                <h2>Este es el nuevo modelo de trabajo de R/GA Buenos Aires.</h2>
                <img className="header-img" src={HeaderImg} alt="HeaderImg"></img>
                <p className="p-style">Scrolleá para ver todos los videos y entender cómo este cambio nos va a ayudar a <br/>seguir creciendo y a mejorar la forma en que trabajamos.</p>
                <span class="iconify" data-icon="eva:arrow-ios-downward-fill" data-inline="false"></span>
                <h3>Introducción</h3>
                <img className="intro-img" src={Intro} alt="IntroImg"></img>
                <p className="p2-style">Conocé por qué nace <strong>We Framework</strong> y lo que vas a ver en el resto de los videos.</p>
                <div className="video-bg"><iframe width="900" height="550" src="https://www.youtube.com/embed/KM8KBVt4ZNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                
            </div>
            
            
      

     
    )
}
