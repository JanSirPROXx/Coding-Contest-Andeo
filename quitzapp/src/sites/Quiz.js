import React, { useEffect } from 'react';
import Key from './globalVar/Key';

const Quiz = (key) => {
    let data = null;
    useEffect(() => {
        data = JSON.parse(localStorage.getItem(Key));
        console.log(data);
    }, [])

    console.log("GlobalVar: ", Key);

    return (
        <div>
            <h1>Quiz</h1>
        </div>
    );
}

export default Quiz;
