import React from 'react'
import "./Homescreen.css";
import helloicon from "./iconsvg/helloicon.svg"
import icon from "./iconsvg/icon.svg"
import Questions from './Questions';
import CancelIcon from '@material-ui/icons/Cancel';
import qsMark from "./iconsvg/qsmark.svg";
import ForumIcon from '@material-ui/icons/Forum';
import dot from "./iconsvg/dot.svg";
function Homescreen({setbotscreen}) {
    const questions=["Can I redeem my FB before the original term?","How do I pay my Credit card bill?","How can I get my Account Statement?","What is the tenure of Fixed Deposit?"];
    return (
        <div className="homescreen">
            <CancelIcon className="close" onClick={()=> setbotscreen(false)} />
           <div className="top-section">
            <p className="name">iris</p>
            <p className="greetings">Hello</p>
            <img className="helloicon" src={helloicon} alt="hello icon" />
            <p className="description">I am Iris, a Virtual Assistant</p>
            <p className="description"> How may I help you?</p>
           </div>
           <div className="logo">
                <img src={icon} alt="logo" />
           </div>
           <div className="middle-section">
                    <p className="faq">
                        Frequently Asked Questions
                    </p>
                    <div className="qs-mark">
                        <img src={qsMark} alt="qs-mark" />
                        <img className="dot" src={dot} alt="dot" />
                    </div>
                    <div>
                        {
                            questions.map((eachQs)=>
                            <Questions text={eachQs} />
                            )
                        }
                    </div>
                    <div className="start">
                        <ForumIcon className="starticon" />
                        Start a New Conversation
                    </div>
           </div>
        </div>
    )
}

export default Homescreen
