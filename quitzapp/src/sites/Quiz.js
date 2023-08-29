import React, { useEffect } from 'react';


const Quiz = () => {
    let questionNr = 0;
    let data = null;

    const Key = (JSON.parse(localStorage.getItem('keyObj'))).key;
    console.log(Key, '<-- KEY');



    useEffect(() => {
        data = JSON.parse(localStorage.getItem(Key));
        //console.log(data);

        //insert quiz
        

    }, [])
    
    function handleQuiz(){

        try{

    
            //debug
            console.log("Start Quiz");
            console.log(data);
            //


            //first session
            let doc = document.getElementById('quiz');
            if(questionNr == 0){
                let title = document.createElement('h2');
                title.innerText = data.name;
                doc.appendChild(title);
            }
            

            let question = document.createElement('h3');

            let answer = document.createElement('input');

            let button = document.createElement('button');

            const index = questionNr; //..

            button.innerText = "Check Answer";

            button.addEventListener('click', () => {
                if(answer.value == data.questions[index].answer){
                    alert('Correct');
                }else{
                    alert('False');
                }
            });
            question.innerHTML = data.questions[index].question;
            answer.type = 'text';
            answer.id = 'answer';
            doc.appendChild(question);
            doc.appendChild(answer);
            doc.appendChild(button);

            questionNr++;
        }catch{
            alert("Keine Fragen mehr!");
        }

    }

    
    

    

    return (
        <>
        <a href='/mytemps'>
                <button>Back</button>
            </a>
        
        <div>
            <h1>Quiz</h1>
        </div>
        <div id='quiz'>
            <button onClick={handleQuiz}>Start Quiz</button>
        </div>
        </>
    );
}

export default Quiz;
