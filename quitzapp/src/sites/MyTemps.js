import {click} from '@testing-library/user-event/dist/click';
import React from 'react';
import {useState, useEffect} from 'react';
import Quiz from './Quiz';
import {setGlobalState, useGlobalState} from './globalVar/GlobalVar';


const MyTemps = () => {
    const [data, getData] = useState([]);
    let myTemplates = [];


    useEffect(() => {
        // let myTemplates = [];
        // Loop trhough every key and store it in my Templates
        let keys = Object.keys(localStorage);

        // remove keyObj GlobalVar
        let index = keys.indexOf('keyObj'); // <-- filter
        if (index !== -1) {
            keys.splice(index, 1);
        }

        console.log(' keys found: ', keys);
        for (let i = 0; i < keys.length; i++) {
            myTemplates.push(JSON.parse(localStorage.getItem(keys[i])));
            // console.log('Data from localStorage ', myTemplates[i]);
        }


    }, [data]);


    useEffect(() => {
        console.log('handleTemplates ', myTemplates[1].name); // debug
        let doc = document.getElementById('templates');
        for (let i = 0; i < myTemplates.length; i++) {
            let template = document.createElement('button');
            template.innerHTML = myTemplates[i].name;

            // V1

            let ref = document.createElement('a');
            ref.href = '/quiz'; // Zu früh auf /quiz umgeleitet, so kann GlobalVar nicht festgelegt werden
            ref.id = myTemplates[i].name;
            console.log(myTemplates[i].name);
            doc.appendChild(ref);
            ref.appendChild(template);
            ref.addEventListener('click', handleQuiz);


            // V2
            /*
            template.id = myTemplates[i].name;
            template.addEventListener('click', handleQuiz);
            let quizTemp = document.getElementById('quiz');
            quizTemp.appendChild(template);
            */


        }
    }, [])

    function handleQuiz(el) { // Quiz wird geöffnet


        console.log("Handeling Quiz");
        let key = el.currentTarget.id;
        console.log(el.currentTarget.id, " <-- Current id");
        console.log("Global Key: -> " + key);


        let keyObj = {
            name: 'keyObj',
            key: key
        }

        localStorage.setItem('keyObj', JSON.stringify(keyObj));


        // window.location.reload();

    }


    return (
        <div>
            <a href='/'>
                <button href={'/'}>
                    back Home
                </button>
            </a>

            <h1>MyTemps</h1>

            <div id='templates'></div>
            <div id='quiz'></div>


        </div>
    );
}

export default MyTemps;
