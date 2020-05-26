import React from "react";
import Header from "Components/Header/Header";
import Models from "Components/Models/Models";
import Sidepanel from "Components/Sidepanel/Sidepanel";
import "./Home.css";

const Home=()=>{

    return (
        <React.Fragment>
        <Sidepanel></Sidepanel>
        <div className="mainAreaContainer">
            <Header></Header>
            <Models></Models>
        </div>
        </React.Fragment>
    )
}

export default Home