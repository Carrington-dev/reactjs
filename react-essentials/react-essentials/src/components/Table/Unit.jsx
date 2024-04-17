import { formatter } from "../../util/investment";

export default function Unit({ year, interest, valueEndOfYear, annualInvestment }){
    var totalInerest = valueEndOfYear - annualInvestment * year;
    
    return (
        <tr>
            <td>{ year }</td>
            <td>{ formatter.format(valueEndOfYear) }</td>
            <td>{ formatter.format(interest) }</td>
            <td>{ formatter.format(totalInerest) }</td>
            <td>{ formatter.format(annualInvestment) }</td>
        </tr>
    );
}