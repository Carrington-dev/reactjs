import { calculateInvestmentResults } from "../../util/investment";
import Unit from "./Unit";

export default function Table({ investmentData }){

    var results =  calculateInvestmentResults(investmentData)
    // console.log("My user results is given below", results)
    // results.map(item => {
    //     console.log(item)
    // })
    const myDataOutput =  results.map((item) => <Unit {...item}  key={item.year + 1} />)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                { myDataOutput }
            </tbody>
        </table>
    );
}