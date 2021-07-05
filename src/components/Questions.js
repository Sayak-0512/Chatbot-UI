import React from 'react'
import "./Questions.css";
function Questions({text}) {
    return (
        <div className="box">
            <div className="outer-blob">
                <div className="blob"></div>
            </div>
            <div className="text">
              {text}
            </div>    
        </div>
    )
}

export default Questions
