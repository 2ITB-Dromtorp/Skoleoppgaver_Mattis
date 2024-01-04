import { useState } from "react";

export function Row({ data, setData, entry, editable }) {
    const [editedData, setEditedData] = useState({ ...entry });

    const content = [];
    for (const [i, v] of Object.entries(editedData)) {
        content.push((<td>
            {editable ? (
                <input className="table_cell" key={i} value={v} onInput={e => {
                    setEditedData({ ...editedData, [i]: e.target.value })
                }} />
            ) : (
                <td className="table_cell" key={i}>{v}</td>
            )}
        </td>))
    }

    return (
        <tr>
            {content}
            {editable ? (
            <button className="table_cell" onClick={() => {
                setData((prev) => {
                    const newData = [
                        ...prev,
                    ];
                    newData[prev.indexOf(entry)] = editedData
                    fetch("http://localhost:81/updateuser", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            data: editedData,
                            id: entry.ElevID,
                        }),
                    })
                    return newData;
                })
            }}>
                Submit
            </button>) : null}
        </tr>
    )
}