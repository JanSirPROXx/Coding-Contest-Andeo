import React, { useEffect } from 'react';

const Quiz = (key) => {
    let data = null;
    useEffect(() => {
        data = JSON.parse(localStorage.getItem(key));
        console.log(data);
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Quiz;
