import axios from "axios";
import { Row } from "./row";
import { useEffect, useState } from "react";

export function Table({ headerText, editable }) {
    const [customersData, setCustomersData] = useState();

    useEffect(() => {
        const getCustomersData = () => {
            axios
                .get("http://localhost:81/users")
                .then(data => setCustomersData(data.data))
                .catch(error => console.log(error));
        };
        getCustomersData()
    }, [])

    useEffect(() => {
        console.log(customersData)
    }, [customersData])

    let content;
    if (customersData) {
        const result = [];
        for (const [i, v] of Object.entries(customersData)) {
            result.push((
                <tr className="table_row">
                    <Row key={i} data={customersData} setData={setCustomersData} entry={v} editable={editable} />
                </tr>
            ))
        }
        content = result
    }

    return (
        <>
            <h1>
                {headerText}
            </h1>
            <table id="table">
                <thead>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </>
    );
}