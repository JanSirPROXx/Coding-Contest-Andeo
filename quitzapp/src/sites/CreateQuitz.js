import React from 'react';
import { useState, useEffect } from 'react';


const CreateQuitz = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //If data doesnt exist in local storage, 
        // get data
        //check data for same name
        // if data doesnt exitst
        //add 
        localStorage.setItem(data.name, JSON.stringify(data)); //Upload data to local storage!
        console.log('Upload data to LocalStorage', data);
    }, [data]);

    let addQuestion = () => {
        console.log('addQuestion'); // debug
        let doc = document.getElementById('questions-box');
        let question = document.createElement('input');
        let answer = document.createElement('input');
        question.type = 'text';
        answer.type = 'text';
        question.placeholder = 'Word';
        answer.placeholder = 'Answer';

        question.classList.add('ques'); // className
        answer.classList.add('ans') //

        doc.appendChild(question);
        doc.appendChild(answer);
    }

    let handleSafe = () => {
        console.log('handleSafe'); // debug
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let questions = document.getElementsByClassName('ques');
        let answers = document.getElementsByClassName('ans');
        let data = {
            name: name,
            description: description,
            questions: []
        }
        for (let i = 0; i < questions.length; i++) {
            data.questions.push({question: questions[i].value, answer: answers[i].value})
        }
        console.log(data); // debug
        setData(data);
    }

    return (
        <div>
            <a href='/'>
                <button>back Home</button>
            </a>

            <h1>CreateQuitz</h1>
            <div>
                <label form='name'>Name:</label>
                <input type='text' id='name'></input>
            </div>
            <div>
                <label form='description'>description:</label>
                <input type='text' id='description'></input>
            </div>
            <div>
                <input type='' placeholder='language'></input>
                <input type='' placeholder='language'></input>

            </div>
            <div>
                <button id='addQuestion'
                    onClick={addQuestion}>Add Question</button>

            </div>
            <div id='questions-box'></div>
            <div>
                <button onClick={handleSafe}>
                    Safe template
                </button>
            </div>
        </div>
    );
}

export default CreateQuitz;
