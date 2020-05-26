import React from "react";
import "./Footer.css"

const Footer=()=>{

    return (
        <div>
            <div className="footerModelNameContainer">
                <div className="footerModels">Sedans</div>
            </div>
            <div className="footerContainer">
                    <div className="footerTextContainer">
                        <div className="headerTitle">About Volkswagen</div>
                        <p>Corporate</p>
                        <p>Newsroom</p>
                        <p>Contact</p>
                        <p>Chat with us</p>
                        <p>U Media Site</p>
                    </div>
                    <div className="footerTextContainer">
                        <div className="headerTitle">Shopping Tools</div>
                        <p>Financial Services</p>
                        <p>Certified Pre-Owned</p>
                        <p>Partner Program</p>
                        <p>Corporate Fleet</p>
                    </div>
                    <div className="footerTextContainer">
                        <div className="headerTitle">Owners</div>
                        <p>Know your VW</p>
                        <p>Car-Net® Customer Portal</p>
                        <p>Service & Parts</p>
                        <p>TDI Emissions Modification Lookup</p>
                        <p>Recalls</p>
                    </div>
                </div>
        </div>
    );
}

export default Footer;