import React, { useState } from 'react';

function Color() {
    const [color, setColor] = useState('');

    function changeColor(newColor) {
        setColor(newColor);
    }

    return (
        <>
            <div className='box' style={{ color: color }}>
                Text hello!
            </div>
            <button onClick={() => changeColor('blue')}>Blue</button>
            <button onClick={() => changeColor('red')}>Red</button>
            <button onClick={() => changeColor('green')}>Green</button>
            <button onClick={() => changeColor('orange')}>Orange</button>
            <button onClick={() => changeColor('yellow')}>Yellow</button>
            <button onClick={() => changeColor('purple')}>Purple</button>
            <button onClick={() => changeColor('pink')}>Pink</button>
        </>
    );
}

export default Color;


