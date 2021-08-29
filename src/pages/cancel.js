import * as React from "react"
import { Link } from "gatsby"

// markup
const CPage = () => {
    return (
        <main>
            <p>Gotcha! Your test payment got canceled! Queen murderous Mary's wolfy backend engineers got you. You are spending jailtime in the Tower of London. Mo-Ha-Ha-Ha!</p>
            <p>Try another TimeShip test trip:</p>
            <ul>
                <li>
                    <a href="/api/time-ship?city=London&year=1554&price=333">
                    /api/time-ship?city=London&year=1554&price=333
                    </a>
                </li>
                <li>
                    <Link to="/">or go back home</Link>
                </li>
            </ul>
        </main>

    )
}

export default CPage
