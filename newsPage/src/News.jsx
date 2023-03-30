import React from "react";



export default function News(props){
    return(
        <div className="news">
            <img src={props.img} alt='NewsImg'></img>
            <div>
                <h1>0{props.number}</h1>
                <h3 className="title">{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}