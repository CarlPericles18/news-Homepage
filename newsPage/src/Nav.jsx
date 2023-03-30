import React from "react";
import Logo from "../public/images/logo.svg"


export default function Nav(){
    return(
        <div className="navigation">
            <img src={Logo} alt="LogoImg"></img>
            <nav className="nav">
                    <ul>Home</ul>
                    <ul>New</ul>
                    <ul>Popular</ul>
                    <ul>Trending</ul>
                    <ul>Categories</ul>
            </nav>
        </div>
    )
}