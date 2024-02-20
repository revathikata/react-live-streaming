import React from 'react';
import './App.css';
import Trail from './components/trail';
import LiveStreamApp from './components/liveStreamApp';
import Roompage from './components/Room';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Liveclasses from './components/liveclasses'
import AntMedia from './components/antmedia'
import ReactQuiz from './components/quiz/reactQuiz';
import Wrapper from './components/calculator/wrapper';
import Calculator from './components/calculator/calculator';
import ButtonBox from './components/calculator/buttonBox';
import Button from './components/calculator/button';
import CalContext from './components/calculator/calContext';
import Game from './components/game/game'
import LifeCycle from './components/lifecycle/lifecyle'
const btnValues =   [
  ["c","x/-","%", "/"],
  [7,8,9, "x"],
  [4,5,6, "-"],
  [1,2,3, "+"],
  [0,".", "="]
]
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
          <Route path='/' element={<Trail />} />
          <Route path='/live' element={<LiveStreamApp />} />
          <Route path='/room/:roomId' element={<Roompage />} /> {/* Add : before roomId */}
          <Route path='/liveclasses' element={<Liveclasses />} />
          <Route path='/ant' element={<AntMedia />} />
          <Route path='quiz' element={<ReactQuiz />} />
          <Route path='lifeCycle' element= {<LifeCycle />} />
        </Routes>
        <CalContext >
        <Wrapper>
          <Calculator />
          <ButtonBox>
            {btnValues.flat().map((btn,i) => (
              <Button value={btn} key={i}/>
            ))}
          </ButtonBox>
        </Wrapper>
        </CalContext>
        <Game />
    </div>
    </Router>
  );
}

export default App;
