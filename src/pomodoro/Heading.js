import React from "react";
import classNames from "../utils/class-names";

function Heading({session, focusDuration, breakDuration, isTimerRunning, setSession, setIsTimerRunning, setFocusDuration, setBreakDuration, minutesToDuration, playPause}) {
        function handleStop() {
        setIsTimerRunning(false)
        setSession(null)
        }

        const handleFocusDecrease = () =>{
        focusDuration > 5 && 
            setFocusDuration((currentDuration)=> currentDuration-5)
        }

        const handleFocusIncrease = ()=>{
        focusDuration < 60 && 
            setFocusDuration((currentDuration)=> currentDuration+5)
        }

        const handleBreakDecrease = () =>{
        breakDuration > 1 && 
            setBreakDuration((currentDuration)=> currentDuration-1)
        }

        const handleBreakIncrease = () =>{
        breakDuration < 15 && 
            setBreakDuration((currentDuration)=> currentDuration+1)
        }
        // TODO: I'd like to create a button component that can be called with different variables because they are so similarn
    return (
        <div>
            <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                {/* Update this text to display the current focus session duration */} 
                Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                {/* Implement decreasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    onClick={handleFocusDecrease}
                    disabled={session || focusDuration <= 5}
                >
                    <span className="oi oi-minus" />
                </button>
                {/* Implement increasing focus duration  and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={handleFocusIncrease}
                    disabled={session || focusDuration >= 60}
                >
                    <span className="oi oi-plus" />
                </button>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-break">
                    {/* Update this text to display the current break session duration */}
                    Break Duration: {minutesToDuration(breakDuration)}
                </span>
                <div className="input-group-append">
                    {/* Implement decreasing break duration and disable during a focus or break session*/}
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-break"
                    onClick={handleBreakDecrease}
                    disabled={session || breakDuration <= 1}
                    >
                    <span className="oi oi-minus" />
                    </button>
                    {/* Implement increasing break duration and disable during a focus or break session*/}
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-break"
                    onClick={handleBreakIncrease}
                    disabled={session || breakDuration >= 15}
                    >
                    <span className="oi oi-plus" />
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <div
                className="btn-group btn-group-lg mb-2"
                role="group"
                aria-label="Timer controls"
            >
                <button
                type="button"
                className="btn btn-primary"
                data-testid="play-pause"
                title="Start or pause timer"
                onClick={playPause}
                >
                <span
                    className={classNames({
                    oi: true,
                    "oi-media-play": !isTimerRunning,
                    "oi-media-pause": isTimerRunning,
                    })}
                />
                </button>
                {/* Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
                {/* Disable the stop button when there is no active session */}
                <button
                type="button"
                className="btn btn-secondary"
                data-testid="stop"
                title="Stop the session"
                onClick={handleStop}
                disabled={!session}
                >
                <span className="oi oi-media-stop" />
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Heading
