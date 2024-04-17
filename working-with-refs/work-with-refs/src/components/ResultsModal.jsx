import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultsModal = forwardRef(function ResultsModal({result, targetTime, targetTimeLeft }, ref) {
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        ref.current.close();
    }
    // console.log(targetTime, targetTimeLeft)
    return createPortal(( <dialog className="result-modal" ref={ref}>
        <h2>{ result } </h2>
        <p>Your target time was <strong>{ targetTime > 1 ? `${targetTime} seconds`: `${targetTime} second` } </strong></p>
        <p>You stopped the time with  <strong>{ targetTimeLeft > 1 ? `${targetTimeLeft} seconds`: `${targetTimeLeft} second` } left </strong></p>
        <form action="dialog" onSubmit={onFormSubmit}>
            <button>Close</button>
        </form>
    </dialog> ), document.getElementById('modal'));
})

export default ResultsModal;