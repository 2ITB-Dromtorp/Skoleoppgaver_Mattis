import axios from "axios";
import { Row } from "./row";
import { useEffect, useState } from "react";

export function Table({ headerText, editType }) {
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
                    <Row key={i} data={customersData} setData={setCustomersData} entry={v} editType={editType} />  
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
                    <tr>
                        <th className="table_cell">ID</th>
                        <th className="table_cell">Name</th>
                        <th className="table_cell">Last name</th>
                        <th className="table_cell">Class</th>
                        <th className="table_cell">Hobby</th>
                        <th className="table_cell">Gender</th>
                        <th className="table_cell">Computer id</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </>
    );
}