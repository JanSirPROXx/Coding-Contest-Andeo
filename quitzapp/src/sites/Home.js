import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateQuitz from './CreateQuitz';

const Home = () => {
    return (
        <>
            <div>
                <h1>Quitzlet 2.0</h1>

                <div className=''>
                    <a href='/create'>
                        <button id='createQuitz'
                            href={'/create'}>
                            CreateQuitz
                        </button>
                    </a>

                </div>
                <div className=''>
                    <a href='/mytemps'>
                        <button id='myQuitzs'>
                            MyTemplates
                        </button>
                    </a>

                </div>
                <div className=''>
                    <a href='/randomquiz'>
                        <button className='randomQuitz'>
                            randomQuitz
                        </button>
                    </a>

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
