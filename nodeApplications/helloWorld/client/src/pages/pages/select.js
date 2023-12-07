import axios from "axios";
import { useEffect, useState } from "react";
export default function Select() {
    const [customersData, setCustomersData] = useState([]);

    const getCustomersData = () => {
        axios
            .get("http://localhost:3001/users")
            .then(data => setCustomersData(data.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getCustomersData()
    }, [])

    useEffect(() => {
        console.log(customersData)
    }, [customersData])


    return (
        <>
            <h1>
                Select
            </h1>
            <table id="table">
                <thead>
                    {(() => {
                        const customer = customersData[0];
                        const result = [];
                        for (const [i, v] of Object.entries(customer)) {
                            result.push((
                                <th className="table_cell" key={i}>
                                    {i}
                                </th>
                            ))
                        }
                        return (
                            <tr className="table_row">
                                {result}
                            </tr>
                        )
                    })()}
                </thead>
                <tbody>
                    {customersData.map((customer, index) => (
                        <tr className="table_row" key={index}>
                            {(() => {
                                const result = [];
                                for (const [i, v] of Object.entries(customer)) {
                                    result.push((
                                        <td className="table_cell" key={i}>
                                            {v}
                                        </td>
                                    ))
                                }
                                return result;
                            })()}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}