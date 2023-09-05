import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';

const Edit = () => {
    const [data, setData] = useState([]);
    let keyData = null;

    const Key = (JSON.parse(localStorage.getItem('keyObj'))).key;
    console.log(Key, '<-- KEY');

    useEffect(() => {
        localStorage.setItem(data.name, JSON.stringify(data)); // Upload data to local storage!
        console.log('Upload data to LocalStorage', data);
    }, [data]);


    useEffect(() => { // get current data
        keyData = JSON.parse(localStorage.getItem(Key));
        insertKeyData(); // insert
    }, [])


    const insertKeyData = () => {
        document.getElementById('name').value = keyData.name;
        document.getElementById('description').value = keyData.description;
        document.getElementById('la1').value = keyData.la1;
        document.getElementById('la2').value = keyData.la2;

        for (let i = 0; i < keyData.questions.length; i++) {
            console.log(i + ' = i');
            try {

                addQuestion();
                // insert data
                let el1 = document.getElementsByClassName('ques');
                let el2 = document.getElementsByClassName('ans');

                el1[i].value = keyData.questions[i].question;
                el2[i].value = keyData.questions[i].answer;

            } catch (e) {
                console.log('Error: ', e);
            }


        }
    }

    const handleInputChange = (event) => {};


    const handleQuestionChange = (event) => { // change question in state

    }


    const handleSubmit = () => {
        console.log('handleSafe'); // debug
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let questions = document.getElementsByClassName('ques');
        
        let answers = document.getElementsByClassName('ans');
        // Sentences

        let data = {
            name: name,
            description: description,
            questions: [],
        }

        for (let i = 0; i < questions.length; i++) {
            data.questions.push({question: questions[i].value, answer: answers[i].value});
        }
        //console.log(data); 
        setData(data);
    }

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
        doc.appendChild(document.createElement('br'));
    }


    return (
        <div>

            <a href='/mytemps'>
                <button>back Home</button>
            </a>
            <h1>Edit</h1>


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
                    onClick={addQuestion}>Add Question Sentence</button>
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
                    onClick={handleSubmit}>
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

export default Edit;
