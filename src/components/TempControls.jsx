import React from 'react'

function TempControls({ onIncrease, onDecrease, onReset }) {
    return (
        <>
            <button onClick={ onIncrease }>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={onReset}>Reset</button>
        </>
        
    );
}

export default TempControls