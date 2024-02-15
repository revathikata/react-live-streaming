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
        </Routes>
    </div>
    </Router>
  );
}

export default App;
