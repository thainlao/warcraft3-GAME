import React, { useState } from "react";
import Game from "./Game";

function Mainbody () {



    return (
        <div className="flex justify-center mainbody">
            <div className="flex-col flex gap-10">
                <span style={{ fontFamily: 'My Custom Font1' }} className='text-5xl expand text-black'>
                    Welcome to the 
                </span>
                <span style={{ fontFamily: 'My Custom Font1' }} className='text-5xl expand text-black'>
                    Warcraft GUESSER
                </span>
                <div className="flex justify-center items-center">
                    <Game />
                </div>
            </div>
        </div>
    )
}

export default Mainbody;