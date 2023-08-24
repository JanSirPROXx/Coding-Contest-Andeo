import Home from './sites/Home';
import CreateQuitz from './sites/CreateQuitz';
import MyTemps from './sites/MyTemps';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Quiz from './sites/Quiz';


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/'
                        element={<Home/>}/>
                    <Route exact path='/create'
                        element={<CreateQuitz/>}/>
                    <Route exact path='/mytemps'
                        element={<MyTemps/>}/>
                    <Route exact path='/randomquiz'
                        element={<CreateQuitz/>}/>
                        <Route exact path='/quiz'
                        element={<Quiz/>}/>

                </Routes>
            </Router>
        </>
    );
}

export default App;
