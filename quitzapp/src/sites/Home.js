import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateQuitz from './CreateQuitz';
import './home.css';

const Home = () => {
    return (
        <>

            <div>
                <h1>Quizlet 2.0</h1>
                <div>
                    <div className='createDiv'>
                        <a href='/create'>
                            <button id='createQuitz' className='btn1 btntxt'
                                href={'/create'}>
                                CreateQuitz
                            </button>
                        </a>

                    </div>
                    <div className='tempsDiv'>
                        <a href='/mytemps'>
                            <button id='myQuitzs' className='btn2 btntxt'>
                                MyTemplates
                            </button>
                        </a>

                    </div>
                    <div className='randomDiv'>
                        <a href='/randomquiz'>
                            <button id='randomQuitz' className='btn3 btntxt'>
                                randomQuitz
                            </button>
                        </a>

                    </div>
                </div>


            </div>
        </>
    );
}

export default Home;
/**
 *  <div>
            <h1>Quitzlet 2.0</h1>

            <div className=''>
                <button id='createQuitz' href={'/create'}>
                    CreateQuitz
                </button>
            </div>  
            <div className=''>
                <button id='myQuitzs'>
                    MyTemplates
                </button>
            </div>
            <div className=''>
                <button className='randomQuitz'> 
                    randomQuitz
                </button>
            </div>
            
        </div>
 */
