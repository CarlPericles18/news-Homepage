import React from "react";
import Img from "../public/images/image-web-3-desktop.jpg"
import ImgTwo from "../public/images/image-web-3-mobile.jpg"
export default function Page(){
    return(
        <div className="page-Main">
            <img className="pageImg" src={Img} alt='PageImg'></img>
            <img className="pageImg2" src={ImgTwo} alt='PageImg'></img>
            <div className="infoDiv">
                <div><h1>THE BRIGHT Future of WEB 3.0?</h1></div>
                <div className="para">
                    <p>We dive into the next evolution of the web that 
                        claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <button className="bttn"> <span className="readMore"> READ MORE</span></button>
                </div>
            </div>
        </div>
    )
}