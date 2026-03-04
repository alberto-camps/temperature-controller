import React from "react";

function TempDisplay({ temp }) {
    let message='';
    let color='';
    if (temp < 15) {
        message = '¡Hace frío!'
        color = 'blue'
    } else if (temp <= 25) {
        message = "Temperatura agradable"
        color = 'green'
    } else {
        message = '¡Hace calor!'
        color = 'red'
    }
    return (
        <>
            <h2 style={{ color }}>La temperatura actual es de: {temp}ºC</h2>
            <h4 style={{ color }}>{message}</h4>
        </>
    )
}

export default TempDisplay