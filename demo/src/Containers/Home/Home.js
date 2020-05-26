import React from "react";
import Header from "Components/Header/Header";
import Models from "Components/Models/Models";
import Sidepanel from "Components/Sidepanel/Sidepanel";
import Footer from "Components/Footer/Footer";
import "./Home.css";

const Home=()=>{

    return (
        <React.Fragment>
        <Sidepanel></Sidepanel>
        <div className="mainAreaContainer">
            <Header></Header>
            <Models></Models>
            <Footer />
        </div>
        </React.Fragment>
    )
}

export default Home