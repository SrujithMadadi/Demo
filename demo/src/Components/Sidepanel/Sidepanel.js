import React from "react";
import "./Sidepanel.css";
import Logo from "Assets/logo.jpeg";
import Paper from '@material-ui/core/Paper';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Button } from "@material-ui/core";
import BuildIcon from '@material-ui/icons/Build';
import {withRouter} from "react-router-dom"

const SidePanel=(props)=>{

    const modelsClickHandler=()=>{
        props.history.push("/home")
    }

    return (
        <Paper>
            <div className="sidePanelContainer">
                <div className="sidepanelItem"><img src={Logo} alt="Volkswagen Logo" className="logo"/></div>
                <Button className="modelsButton sidepanelItem" onClick={modelsClickHandler}>
                    <LocalTaxiIcon />
                    <p className="sidepanelText">Models</p>
                </Button>
                <Button className="sidepanelItem modelsButton">
                    <BuildIcon></BuildIcon>
                    <p className="sidepanelText">Service</p>
                </Button>
            </div>
        </Paper>
    )

}

export default withRouter(SidePanel);