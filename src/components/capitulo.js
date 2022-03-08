import React from 'react'


export default function capitulo1(props) {
    return (
        <div className="wraper">

            <p className="p1-style">{props.paragraph1}</p>
            <h2 className="subtitle">{props.subtitle}</h2>
            <img className="cap1" src={require("../img/"+ props.imgUrl +".png").default} alt="Capitulo1"></img>
            <p className="p2-style">Te explicamos qué es un modelo operativo, por qué el nuestro se llama <br /> <strong>We Framework</strong> y cuáles son sus pilares más importantes.</p>

            <div className="video-bg"><iframe width="900" height="550" src={props.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            
        </div>
    )
}

