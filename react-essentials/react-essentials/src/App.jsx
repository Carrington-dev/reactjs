import { Fragment, useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import Table from "./components/Table/Table"

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 3760,
    annualInvestment: 450,
    expectedReturn: 560,
    duration: 5
  })

  const handleUserInputChanges = (identifier, newValue) => {
    setInvestmentData((currentValue) => {
      return {
        ...currentValue,
        [identifier]: +newValue
      }
    })
  }

  return (
    <Fragment>
      <Header />
      <UserInput handleUserInputChanges={handleUserInputChanges} investmentData={investmentData} />
      <Table investmentData={investmentData} />
    </Fragment>
  )
}

export default App
