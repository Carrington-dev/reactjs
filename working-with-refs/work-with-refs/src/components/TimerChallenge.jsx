import { useState, useRef, useEffect } from "react";
import ResultsModal from "./ResultsModal";

function TimerChallenge({ title, targetTime }) {
    const myTimer = useRef()
    const modalRef = useRef()
    const [myTargetTime, setTargetTime] = useState(targetTime)
    const [isRunning, setIsRunning] = useState(false)

    const isExpired = myTargetTime <= 0
    // console.log(title, targetTime)

    useEffect(() => {
        setIsRunning(false)
    }, [isExpired])

    // console.log("it's running", myTargetTime)
    if (myTargetTime <= 0) {
        clearInterval(myTimer.current)
        // console.log("it's running after timer is paused/stopped")
        // setIsRunning(false)
        modalRef.current.showModal();
    }

    const onClickedHandler = (e) => {
        setIsRunning(true)
        // console.log("it's running before", myTargetTime)
        myTimer.current = setInterval(() => {
            setTargetTime((myTargetTime) => myTargetTime - 0.001)
        }, 10);
        // console.log("it's running after", myTargetTime)
    }

    const onClearHandler = (e) => {
        setIsRunning(false)
        clearInterval(myTimer.current)
        modalRef.current.showModal();
    }

    const tryAgainHandler = (e) => {
        setTargetTime(targetTime);
    }


    // console.log(targetTime, myTargetTime)
    const score = Math.round(myTargetTime / ( targetTime) * 100)


    return (<section className="challenge">
        <h2>{title}</h2>
        <ResultsModal ref={modalRef} result={ myTargetTime <= 0 ? `You lost!!!` : `You won with ${ score } points!!! `} targetTime={targetTime} targetTimeLeft={ myTargetTime.toFixed(2) } />
        { myTargetTime >= 1 && <p className="challenge-time">
            {myTargetTime > 1 ? `${myTargetTime.toFixed(3)} seconds` : `${myTargetTime.toFixed(3)} second`}
        </p>}
        {/* {
            myTargetTime <= 0 ? (<ResultsModal ref={modalRef} result={`lost!!!`} targetTime={targetTime} targetTimeLeft={myTargetTime} />) : (<p className="challenge-time">
                {myTargetTime > 1 ? `${myTargetTime} seconds` : `${myTargetTime} second`}
            </p>)
        } */}
        <p>

            {!isExpired ? (<button onClick={!isRunning ? onClickedHandler : onClearHandler}>
                {isRunning ? `Stop` : `Start`} Challenge
            </button>) : (<button onClick={!isRunning ? tryAgainHandler : onClearHandler}>
                {isRunning ? `Stop` : `Replay`} Challenge
            </button>)}
        </p>

        <p className={isRunning ? `active` : ``}>
            {isRunning ? `Timer is running...` : `Timer inactive`}
        </p>
    </section>);
}

export default TimerChallenge;