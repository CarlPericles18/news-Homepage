import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar"
import Page from "./Page"
import "./App.css"
import News from "./News";
import newsData from "../public/data"

export default function App(){

const information = newsData.map(item => {
    return (
        <News 
            key={item.id}
            title= {item.title}
            number = {item.number}
            img = {item.img}
            desc = {item.desc} 
        />
    )
})  

    return(
        <div className="Main">
            <Nav  />
            <div className="Body">
                <div>
                <Page/>
                </div>
                <div>
                <SideBar/>
                </div>
             </div>
             <div className="information">
                {information}
            </div>
        </div>
    )

}