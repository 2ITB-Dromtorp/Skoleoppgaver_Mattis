import { useState } from "react";

export function Row({ data, setData, entry, editType }) {
    const [editedData, setEditedData] = useState({ ...entry });

    const content = [];
    for (const [i, v] of Object.entries(editedData)) {
        content.push((<td>
            {editType === "update" ? (
                <input className="table_cell" key={i} value={v} onInput={e => {
                    setEditedData({ ...editedData, [i]: e.target.value })
                }} />
            ) : editType === "delete" ? (
                <td className="table_cell" key={i}>{v}</td>
            ) : (
                <td className="table_cell" key={i}>{v}</td>
            )}
        </td>))
    }

    return (
        <tr>
            {content}
            {editType === "update" ? (
                <button className="Submit" onClick={() => {
                    setData((prev) => {
                        const newData = [
                            ...prev,
                        ];
                        newData[prev.indexOf(entry)] = editedData
                        fetch(`http://localhost:81/updateuser/${editedData.Fornavn}/${editedData.Etternavn}/${editedData.Klasse}/${editedData.Hobby}/${editedData.Kjonn}/${editedData.DatamaskinID}/${editedData.ElevID}`, {
                            method: "PUT",
                        })
                        return newData
                    })
                }}>
                    Submit
                </button >
            ) : editType === "delete" ? (
                <button className="Delete" onClick={() => {
                    fetch(`http://localhost:81/deleteuser/${entry.ElevID}`, {
                      method: "DELETE",  
                    });
                }}>
                    Delete
                </button>
            ) : null}
        </tr>
    )
}