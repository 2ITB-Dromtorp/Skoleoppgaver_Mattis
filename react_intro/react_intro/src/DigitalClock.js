import { useState } from "react";

export default function DigitalClock() {

    const [currentTime, setTime] = useState(new Date)

    const int = setInterval(() => {
        setTime(new Date)
    }, 1000);

    return (
        <div className="App">
            <header className="App-header">

                <h1> {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()} </h1>

            </header>

        </div>

    )

}