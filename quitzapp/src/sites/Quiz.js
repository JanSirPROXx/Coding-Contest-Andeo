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
        console.log(index + ' handleQuestion index'); //debug 

        let isSentenceQuestion = true; //If answer contains * its true,

        let txt = data.questions[index].question;
        let gaptxt = data.questions[index].answer;
        let gapSplit = gaptxt.split('*');               console.log(gaptxt.split('*'), 'Splited gab arry');//debug
        
        //Checker if this is a normal vocy ques or a vocy ques in a sentence
        if(gapSplit.length == 1){
            isSentenceQuestion = false;
            return {
                isSentence: isSentenceQuestion
            }
        }

        let words = gapSplit.filter((el) => {
            //buggy
            
            if(el.includes(' ')){ //If txt part contains an space its part of the question sentence and not the gap word
        
            }else{
                return el;
            }
            
            /*
            if(el.includes(' ')){
                return el
            }*/

        });
        //let sentence = txt.replace(word[1], "______");
        let newSentence = "";
        let res = {
            sentence: txt,
            sentence2: null,
            answer: [],
            isSentence: isSentenceQuestion
        }
        newSentence = gaptxt
        for(let i = 0; i < words.length; i++){
            //console.log(words.length, ' :Amount ', words, " arry"); //debug
            newSentence = newSentence.replace(('*'+words[i]+'*'), "______");
            res.answer.push(words[i]);

            //console.log(replaced); //debug
        }
        
        res.sentence2 = newSentence; //insert sen2
        
        
       

        return res;
    }
    
    function handleQuiz(){

        //Check for questions
        let index = questionNr;

        try{
            let res = handleQuestion(questionNr);

            
            //debug
            
            //console.log(data);
            //


            //first session
            let doc = document.getElementById('quiz');
            if(questionNr == 0){
                console.log("Start Quiz");
                let title = document.createElement('h2');
                title.innerText = data.name;
                doc.appendChild(title);
                doc.removeChild(document.getElementById('startQuiz')); //remove start btn
            }
            
            //Split Sentence and Ques ////////////////////////////////////////////////////////
            
            if(res.isSentence){
                console.log('sentence')//debug
                 //idk
                //Full txt
                let sen1 = document.createElement('h3');
                sen1.innerHTML = res.sentence;
                //Gap Txt
                let sen2 = document.createElement('h3');
                sen2.innerHTML = res.sentence2; console.log(res.sentence2, ' Sentence 2 res -> ', res); //debug
                
                
                
                //Check btn
                let btn = document.createElement('button');
                btn.innerText = "Check Answer"; // add plural 'Check Answers'

                //Skip btn
                let skipBtn = document.createElement('button');
                skipBtn.innerText = "Skip";

                
                skipBtn.addEventListener('click', (el) => {
                    for(let i = 0; i < res.answer.length; i++){
                        //get Inputfields
                        let ele = document.getElementById(i + '*' + index);
                        ele.value = res.answer[i];
                        
                    }
                    handleQuiz();
                });
                
                btn.addEventListener('click', (el) => { //Check every answer
                    try{
                        let richtig = []; //If anser is right richtig.lenght == res.answer.lenght
                        for(let i = 0; i < res.answer.length; i++){
                            console.log(res.answer[i], ' Antowrt für', i, ' res = ', res); //debug
                            let ele = document.getElementById(i + '*' + index); console.log(i + '*' + index);
                            console.log(ele, ' ele.value'); //debug
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
                        
                        if(questionNr == index){
                            //handleQuiz();
                        }
                    }catch(e){
                        console.log('Check answer Error: ', e);
                    }
                    
                });

                /*
{name: "TestBug1", description: "sa",…}
description
: 
"sa"
name
: 
"TestBug1"
questions
: 
[{question: "Question", answer: "Question"}, {question: "Question", answer: "Question"},…]
0
: 
{question: "Question", answer: "Question"}
1
: 
{question: "Question", answer: "Question"}
2
: 
{question: "Question", answer: "Question"}
3
: 
{question: "Sentence", answer: "Sentence in Sternen *Sentence*"}
4
: 
{question: "Sentence", answer: "Sentence in *Sentence* und *Sentence*"}
                
                */
                
                console.log(sen1.textContent, " + ", sen2.textContent, " Index = ", index); //debug
                doc.appendChild(sen1);
                doc.appendChild(sen2);

                
                for(let i = 0; i < res.answer.length; i++){
                    //console.log('Start inserting input-boxes');
                    try{
                        let answer = document.createElement('input');
                        answer.type = 'text';
                        answer.id = i + '*' + questionNr;
                        //answer.className('answer');
                        doc.appendChild(answer);
                        //console.log('end inserting for ' + i);
                    }catch(e){
                        console.log('Error inserting for ' + i + 'error code: ', e);
                    }
                    
                }
                doc.appendChild(btn);
                doc.appendChild(skipBtn);

                

            }else{////////////////////// normal vocy question
            let question = document.createElement('h3');

            let answer = document.createElement('input');

            let button = document.createElement('button');

            let skipButton = document.createElement('button');

             //..

            button.innerText = 'Check Answer';
            skipButton.innerText = 'Skip';

            skipButton.addEventListener('click', (el) => {
                answer.value = data.questions[index].answer;
                handleQuiz();
            });

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
            doc.appendChild(skipButton);

            }
            ////////////////////////////////////////////////////////////////////////////////

            
            questionNr++;
        }catch{
            //End of quiz, no more questions available:
            let doc = document.getElementById('quiz'); //Ellements ->
            let ende = document.createElement('h3'); let playAgain = document.createElement('button'); let backToTemp = document.createElement('button');
            let aRef = document.createElement('a'); aRef.href = '/mytemps';
            //inner
            ende.innerText = "End of Quiz"; playAgain.innerText = "Play Again"; backToTemp.innerText = "Back to Templates";

            //add EventListerer
            playAgain.addEventListener('click', () => {
                window.location.reload();
            }); 
            
            doc.appendChild(ende); doc.appendChild(aRef); aRef.appendChild(backToTemp); doc.appendChild(playAgain);
            

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
            <button onClick={handleQuiz} id='startQuiz'>Start Quiz</button>
        </div>
        </>
    );
}

export default Quiz;
