export default function UserInput({ investmentData,  handleUserInputChanges }) {
    // console.log(investmentData)

    return ( <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" required 
                value={ investmentData.initialInvestment}
                onChange={ (event) => handleUserInputChanges("initialInvestment", event.target.value) } />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" required 
                value={ investmentData.annualInvestment}
                onChange={ (event) => handleUserInputChanges("annualInvestment", event.target.value) } />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" required 
                value={ investmentData.expectedReturn}
                onChange={ (event) => handleUserInputChanges("expectedReturn", event.target.value) } />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required 
                value={ investmentData.duration}
                onChange={ (event) => handleUserInputChanges("duration", event.target.value) } />
            </p>
        </div>
    </section>);
}