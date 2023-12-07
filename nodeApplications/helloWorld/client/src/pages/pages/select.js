import axios from "axios";
export default function Select() {


    const getCustomersData = () => {
        axios
            .get("http://localhost:3001/users")
            .then(data => console.log(data))
            .catch(error => console.log(error));
    };


    return (
        <>
            <h1>
                Select
            </h1>
        </>
    );
}