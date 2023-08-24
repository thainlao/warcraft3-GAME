import React, { useState } from "react";
import '../styles/App.css';

function Feedback (props) {

    return (
        <div className="flex justify-center">
            <div className="post flex">
                <div className="post_content">
                    <strong>{props.number} {props.post.tittle}</strong>
                    <div>
                    {props.post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <button onClick={() => props.remove(props.post)} className="rounded-md h-9 w-14 bg-[#e4d6d6] hover:bg-[#beb3b3] shadow-black
                    shadow-sm">Delete 
                    </button>
                </div>
            </div>
        </div>    
    )
}

export default Feedback;