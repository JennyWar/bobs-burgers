import React from "react";
import "./Title.css";
import titleImage from "../../images/titleImage.jpg";
import boblogo from "../../images/boblogo.jpg";

const Title = (props) => (
    <div className="titleContainer">
        <div className="titleImage">
            <img src={titleImage} width="100%" height="1%"/>
        </div>
        <div className="titleHeader">
            <a href="/">
                <img src={boblogo} width="100px" height="100px" className="bobLogo"/>
                <h1>Memory Game</h1>
            </a>
            <h4>Click on each image to earn a point. Watch out! If you click on image more than once, you have to start over.</h4>
            <h5>{props.clickMessage}</h5>
            <h5>Current Score: {props.correctGuesses}</h5>
            <h5>High Score: {props.bestScore}</h5>
        </div>
    </div>
);

export default Title;