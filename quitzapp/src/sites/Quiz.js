import React, { useEffect } from 'react';
import './quiz.css'; //styling


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

    let handleQuestion = (index) =>{
        
        let isSentenceQuestion = true; //If answer contains * its true,

        let txt = data.questions[index].question;
        let gaptxt = data.questions[index].answer;
        let gapSplit = gaptxt.split('*');
        
        //Checker if this is a normal vocy ques or a vocy ques in a sentence
        if(gapSplit.length == 1){
            isSentenceQuestion = false;
            return {
                isSentence: isSentenceQuestion
            }
        }

        let words = gapSplit.filter((el) => {
            if(el.includes(' ')){ //If txt part contains an space its part of the question sentence and not the gap word
        
            }else{
                return el;
            }
        });
        //let sentence = txt.replace(word[1], "______");
        let newSentence = "";
        let res = {
            sentence: txt,
            sentence2: newSentence,
            answer: [],
            isSentence: isSentenceQuestion
        }
        for(let i = 0; i < words.length; i++){
            newSentence = gaptxt.replace(words[i], "______");
            res.answer.push(words[i]);
        }
        
        
       

        return res;
    }
    
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
            
            //Split Sentence and Ques ////////////////////////////////////////////////////////
            let res = handleQuestion(questionNr);
            if(res.isSentence){

                //Full txt
                let sen1 = document.createElement('h3');
                sen1.innerHTML = res.sentence;
                //Gap Txt
                let sen2 = document.createElement('h3');
                sen2.innerHTML = res.sentence2;
                
                
                

                let button = document.createElement('button');

                const index = questionNr; 

                button.innerText = "Check Answer"; // add plural 'Check Answers'

                button.addEventListener('click', (el) => { //Check every answer
                    let richtig = []; //If anser is right richtig.lenght == res.answer.lenght
                    for(let i = 0; i < res.answer.length; i++){
                        let ele = document.getElementById(i + '*' + questionNr);
                        if(ele.value == res.answer[i]){
                            ele.classList.add('correct');
                            richtig.push(ele.value);
                        }
                    }
                    if(richtig.length == res.answer.length){
                        el.currentTarget.classList.add('correct'); //adds green background color
                        handleQuiz();
                        //alert('Correct');
                    }else{
                        alert('False');
                    }
                    /*
                    if(questionNr == index){
                        //handleQuiz();
                    }*/
                });
                
                doc.appendChild(sen1);
                doc.appendChild(sen2);
                for(let i = 0; i < res.answer.length; i++){
                    let answer = document.createElement('input');
                    answer.type = 'text';
                    answer.id = i + '*' + questionNr;
                    answer.className('answer');
                    doc.appendChild(answer);
                }
                doc.appendChild(button);

            }else{////////////////////// normal vocy question
                let question = document.createElement('h3');

            let answer = document.createElement('input');

            let button = document.createElement('button');

            const index = questionNr; //..

            button.innerText = "Check Answer";

            button.addEventListener('click', (el) => {
                if(answer.value == data.questions[index].answer){
                    el.currentTarget.classList.add('correct'); //adds green background color
                    handleQuiz();
                    //alert('Correct');
                }else{
                    alert('False');
                }
                if(questionNr == index){
                    //handleQuiz();
                }
            });
            question.innerHTML = data.questions[index].question;
            answer.type = 'text';
            answer.id = 'answer';
            doc.appendChild(question);
            doc.appendChild(answer);
            doc.appendChild(button);

            }
            ////////////////////////////////////////////////////////////////////////////////

            
            questionNr++;
        }catch{
            //alert("Keine Fragen mehr!");
            //questionNr = 0; //back to start

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
