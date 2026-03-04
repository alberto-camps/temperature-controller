import React from "react";

function HistoryList({ history }) {
    return(
        <>
            <h4>Historial</h4>
            <ul>
                {history.map((e, i) => (
                    <li key={ i }>
                        [{e.time}] → {e.temp}ºC
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HistoryList