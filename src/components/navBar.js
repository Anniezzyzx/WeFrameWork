import React from 'react'
import logoRga from '../img/rga-logo.png'

export default function NavBar() {
    return (

        <nav class="navbar navbar-light bg-light justify-content-between">
            <a href="#">
                <div className="row ml-auto">
                    <div className="sm-6">
                        <img className="logo-header" src={logoRga} alt="rga-logo"></img>
                    </div>

                    <div className="sm-6">
                         <p className="p-header lato-300">We Framework</p> 
                    </div>
                </div>
                
            </a>
            <div className="row mr-2">
            <a href="#"><div className="sm-6 lato-700">Home</div></a>
            <a href="#"> <div className="sm-6 ml-4 lato-300">Client Teams</div></a>
            </div>
            
        </nav>
       
     


        
    )
}
