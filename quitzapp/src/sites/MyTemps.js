import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState, useEffect } from 'react';
import Quiz from './Quiz';
import Key from './globalVar/Key'; //Global var to handle quiz key

const MyTemps = () => {
    const [data, getData] = useState([]);
    let myTemplates = [];
    

    useEffect(() => {
        //let myTemplates = [];
        //Loop trhough every key and store it in my Templates
        let keys = Object.keys(localStorage);
        console.log('Amoutn of keys found ', keys);
        for(let i = 0; i < keys.length; i++){
            myTemplates.push(JSON.parse(localStorage.getItem(keys[i])));
            //console.log('Data from localStorage ', myTemplates[i]);
        }

        

        
    }, [data]);

   
    useEffect(() => {
        console.log('handleTemplates ', myTemplates[1].name); // debug
        let doc = document.getElementById('templates');
        for(let i = 0; i < myTemplates.length; i++){
            let template = document.createElement('button');
            template.innerHTML = myTemplates[i].name;
            let ref = document.createElement('a');
            ref.href = '/quiz';
            ref.id = myTemplates[i].name;
            doc.appendChild(ref);
            ref.appendChild(template);
            ref.addEventListener('click', handleQuiz);
            
            
        }
    }, [])

    function handleQuiz(el){ //Quiz wird in quiz div eingefügt
        console.log("Handeling Quiz");
        let key = el.currentTarget.id;
        console.log("Global Key: -> " + key);
        Key = key;
        
        
        

    }

    
    

    

    return (
        <div>
            <a href='/'>
                <button
                    href={'/'}>
                    back Home
                </button>
            </a>

            <h1>MyTemps</h1>
            
            <div id='templates'>

            </div>
            


        </div>
    );
}

export default MyTemps;
