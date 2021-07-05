import React,{useState,useEffect} from 'react'
import "./Homescreen.css";
import helloicon from "./iconsvg/helloicon.svg"
import icon from "./iconsvg/icon.svg";
import CancelIcon from '@material-ui/icons/Cancel';
import qsMark from "./iconsvg/qsmark.svg";
import ForumIcon from '@material-ui/icons/Forum';
import dot from "./iconsvg/dot.svg";
function Homescreen({setbotscreen}) {
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const [show3, setshow3] = useState(false)
    const [show4, setshow4] = useState(false)
    const [show5, setshow5] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setshow1(true);
         }, 5000);
          setTimeout(() => {
            setshow2(true);
         }, 10000);
         setTimeout(() => {
            setshow3(true);
         }, 15000);
          setTimeout(() => {
            setshow4(true);
         }, 20000);
          setTimeout(() => {
            setshow5(true);
         }, 25000);
       },[]);
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
                <img className="icon" src={icon} alt="logo" />
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
                        show1 && 
                        <div className="box">
                            <div className="outer-blob">
                                <div className="blob"></div>
                            </div>
                            <div className="text">
                            {questions[0]}
                            </div>    
                        </div>
                    }
                    {
                        show2 && 
                        <div className="box">
                            <div className="outer-blob">
                                <div className="blob"></div>
                            </div>
                            <div className="text">
                            {questions[1]}
                            </div>    
                        </div>
                    }
                    {
                        show3 && 
                        <div className="box">
                            <div className="outer-blob">
                                <div className="blob"></div>
                            </div>
                            <div className="text">
                            {questions[2]}
                            </div>    
                        </div>
                    }
                    {
                        show4 && 
                        <div className="box">
                            <div className="outer-blob">
                                <div className="blob"></div>
                            </div>
                            <div className="text">
                            {questions[3]}
                            </div>    
                        </div>
                    }
                    </div>
                    {
                        show5 && 
                        <div className="start">
                            <ForumIcon className="starticon" />
                            Start a New Conversation
                        </div>
                    }
                  
           </div>
        </div>
    )
}

export default Homescreen
