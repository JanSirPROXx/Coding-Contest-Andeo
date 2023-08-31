import React from 'react';
import {useState, useEffect} from 'react';
import './createQuiz.css'; // css
import Popup from 'reactjs-popup';
// popup
// import 'reactjs-popup/dist/index.css';


const CreateQuitz = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // If data doesnt exist in local storage,
        // get data
        // check data for same name
        // if data doesnt exitst
        // add
        localStorage.setItem(data.name, JSON.stringify(data)); // Upload data to local storage!
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

    let addQuestionSentence = () => {
        console.log('addQuestionSentence'); // debug
        let doc = document.getElementById('questions-box');
        let sentence1 = document.createElement('input');
        let sentence2 = document.createElement('input');
        sentence1.type = 'text';
        sentence2.type = 'text';
        sentence1.placeholder = 'Sentence';
        sentence2.placeholder = 'Sentence with gabs in *Word*';


        //

        // sentence2.addEventListener('change', handleSentence2);


        sentence1.classList.add('sen1'); // className
        sentence2.classList.add('sen2') //

        doc.appendChild(sentence1);
        doc.appendChild(sentence2);

    }
    /* //Methode 1
    let handleSentence2 = (el) => {
        let input = el.currentTarget.value;
        console.log(input, " <= input");
        // debug

        // insert answers to question-box
        let doc = document.getElementById('questions-box');
        let answers = (input.split('_').length) - 1;
        for (let i = 0; i < answers; i++) {
            let answer = document.createElement('input');
            answer.type = 'text';
            answer.placeholder = 'Answer';
            answer.classList.add('ansS');
            answer.id = ('answer' + i);
            doc.appendChild(answer);
        }
        */


    let handleSafe = () => {
        console.log('handleSafe'); // debug
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let questions = document.getElementsByClassName('ques');
        console.log(document.getElementsByClassName('ques'), ' debug1');
        let answers = document.getElementsByClassName('ans');
        // Sentences
        let sentence1 = document.getElementsByClassName('sen1');
        
        let sentence2 = document.getElementsByClassName('sen2');


        let data = {
            name: name,
            description: description,
            questions: [],
        }

        for (let i = 0; i < questions.length; i++) {
            data.questions.push({question: questions[i].value, answer: answers[i].value});
        }

        // upload other
        for (let i = 0; i < sentence1.length; i++) {
            data.questions.push({question: sentence1[i].value, answer: sentence2[i].value});
            //data.sentence1.push({sentence1: sentence1[i].value, sentence2: sentence2[i].value});

        }
        console.log(data); // debug
        setData(data);
    }
    

    // Join every sentence with the mulitble answers (becaus there are multible anserwers for one sentence)


    // data.sentence1 = sentence1.filter((el) => el.value).map(( el) => el); //output getElementsbyClassName is a weird array
    // data.sentence2 = sentence2.filter((el) => el.value).map(( el) => el);
    // data.answerSentence = answerSentence.filter((el) => el.value).map(( el) => el);


    return (
        <div>

            <a href='/'>
                <button>back Home</button>
            </a>
            <h1>CreateQuitz</h1>


            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name'
                    style={inputStyle}></input>
                <Popup trigger={
                        <button>?</button>
                    }
                    position="right center">
                    <div>Tippe einen Namen für dein Quiz/Lernset ein.</div>
                </Popup>
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <input type='text' id='description'
                    style={inputStyle}></input>
                <Popup trigger={
                        <button>?</button>
                    }
                    position="right center">
                    <div>Gib deinem Quiz/Lernset eine Beschreibung.</div>
                </Popup>
            </div>
            <div style={languageContainerStyle}>
                <input type='text' placeholder='Language' id='la1'
                    style={languageInputStyle}></input>
                <input type='text' placeholder='Language' id='la2'
                    style={languageInputStyle}></input>
            </div>
            <div>
                <button id='addQuestion'
                    style={buttonStyle}
                    onClick={addQuestion}>Add Question</button>
                <button id='addQuestionSentence'
                    style={buttonStyle}
                    onClick={addQuestionSentence}>Add Question Sentence</button>
                <Popup trigger={
                        <button>?</button>
                    }
                    position="right center">
                    <div>Gib in die erste Spalte deinen Satz in einer belibigen Sprache ein. Gib in der zweiten Spalte deine übersetzung mit _ für die fehlenden Wörter ein. ALs nächstes gibtst du deine Antworten der reihe nach in die erscheinenden Felder ein.</div>
                </Popup>
            </div>
            <div id='questions-box'></div>
            <div>
                <button style={buttonStyle}
                    onClick={handleSafe}>
                    Save Template
                </button>
            </div>

        </div>

    );


}

const inputStyle = {
    margin: '4px',
    padding: '8px',
    width: '200px'
};

const languageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    margin: '4px'
};

const languageInputStyle = {
    padding: '8px',
    width: '100px'
};

const buttonStyle = {
    margin: '4px',
    padding: '8px',
    backgroundColor: '#0F62FE',
    border: '2px solid #0F62FE',
    color: '#FFFFFF',
    cursor: 'pointer'
};
export default CreateQuitz;