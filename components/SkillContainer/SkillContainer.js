import React from 'react';
import {Element} from "react-scroll";
import skillimg from"../../assets/skill.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css";


const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        < div className="skillContainer__image">
            <img src={skillimg} alt="" />
        </div>
        <div className="skillContainer__text">
            <h2>SKILLSET</h2>
            <div className="skillContainer__text">
                <h5>React</h5>
                <div className="skillContainer__slider skillContainer__slider1">
                    <LinearProgress variant="determinate" value={75} />

                </div>
            </div>
            <div className="skillContainer__text">
                <h5>HTML</h5>
                <div className="skillContainer__slider skillContainer__slider2">
                    <LinearProgress variant="determinate" value={90} />

                </div>
            </div>
            <div className="skillContainer__text">
                <h5>CSS</h5>
                <div className="skillContainer__slider skillContainer__slider3">
                    <LinearProgress variant="determinate" value={80} />

                </div>
            </div><div className="skillContainer__text">
                <h5>JavaScript</h5>
                <div className="skillContainer__slider skillContainer__slider4">
                    <LinearProgress variant="determinate" value={80} />
                </div>
            </div>
            <div className="skillContainer__text">
                <h5>Figma</h5>
                <div className="skillContainer__slider skillContainer__slider5">
                    <LinearProgress variant="determinate" value={90} />
                </div>
            </div>
            <div className="skillContainer__text">
                <h5>UX/UI</h5>
                <div className="skillContainer__slider skillContainer__slider6">
                    <LinearProgress variant="determinate" value={70} />

                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer