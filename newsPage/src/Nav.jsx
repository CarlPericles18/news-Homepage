import React from "react";
import Logo from "../public/images/logo.svg"
import mobileLogo from "../public/images/icon-menu.svg"
import mobileLogoClose from "../public/images/icon-menu-close.svg"


export default function Nav(){
    function close(){

    }        
    return(
        <div className="navigation">
            <img className ="desktopLogo"src={Logo} alt="LogoImg"></img>
            <img  className="mobileLogo" src={mobileLogo} alt="LogoImg"></img>
            <div className="nav">
                    <ul>Home</ul>
                    <ul>New</ul>
                    <ul>Popular</ul>
                    <ul>Trending</ul>
                    <ul>Categories</ul>
            </div>
           
            
        </div>
    )
}