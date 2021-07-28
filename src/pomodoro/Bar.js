import React from "react";

function Bar({session, focusDuration, breakDuration}){
    return (
        <div className="row mb-2">
            <div className="col">
            <div className="progress" style={{ height: "20px" }}>
                <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                    100 -
                    (session?.timeRemaining /
                        ((session?.label === "Focusing" ? focusDuration : breakDuration) *  60)) * 100} // Increase aria-valuenow as elapsed time increases
                style={{
                    width: `${
                    100 -
                    (session?.timeRemaining / 
                        ((session?.label === "Focusing" ? focusDuration : breakDuration) *  60)) * 100}%`,}}   // Increase width % as elapsed time increases
                />
            </div>
            </div>
        </div>    
    )                                                          
}

export default Bar 