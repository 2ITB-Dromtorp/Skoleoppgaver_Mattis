import axios from 'axios';

export default function Insert() {
    return (
        <>
            <h1>
                Insert
            </h1>
            <button id="insert" onClick={() => {
                axios.get("http://localhost:81/insert")
            }}>
                Insert
            </button>
        </>
    );
}