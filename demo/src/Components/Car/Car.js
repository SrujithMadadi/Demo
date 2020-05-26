import React from "react";
import { Paper } from "@material-ui/core";
import Passat from "Assets/passat.png";
import VisibilityIcon from '@material-ui/icons/Visibility';
import SettingsIcon from '@material-ui/icons/Settings';

const Car=(props)=>{

    // const getModalImage=(name)=>{
    //     switch(name){
    //         case "Jetta":
    //             return Passat
    //         case "Jetta GLI":
    //             return Passat
    //         case "Passat":
    //             return Passat
    //         case "Arteon":
    //             return Passat
    //         case "Tiguan":
    //             return Passat
    //         case "Atlas Cross Sport":
    //             return Passat
    //         case "Atlas":
    //             return Passat
    //         case "Golf Sport Wagen":
    //             return Passat
    //         case "Golf Alltrack":
    //             return Passat
    //         case "Golf R":
    //             return Passat
    //         default:
    //             return Passat
    //     }
    // }

    return (
        <Paper key={props.type} className="modelItemContainer">
            <div className="modelName">{props.name}</div>
            <img src={Passat} alt="CarImage" class="modalImage"></img>
            <div className="modelDetailsContainer">
                <div className="type">{props.type}</div>
                 <div className="price">{props.name==="Electric Concepts"?"":"Starting at "+props.price}</div>  
            </div>
            <div className="exploreContainer">
                {props.name==="Electric Concepts"?
                <div className="exploreItemContainer">
                    <VisibilityIcon className="modelTextImage"/><p className="exploreContainerText">Find out More</p>
                 </div>
                :<React.Fragment>
                    <div className="exploreItemContainer">
                     <VisibilityIcon className="modelTextImage"/><p className="exploreContainerText">Explore</p>
                    </div>
                    <div className="exploreItemContainer">
                        <SettingsIcon className="modelTextImage"/><p className="exploreContainerText">Build Yours</p>
                    </div>
                </React.Fragment>
                }
            </div>
        </Paper>
    )
}

export default Car;