import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from './pages/about-me/AboutMe';
import WorkExperience from './pages/work-experience/WorkExperience';
import MyProject from './pages/my-project/MyProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about-me' element={<AboutMe/>}/>
            <Route path='work-experience' element={<WorkExperience/>}/>
            <Route path='my-project' element={<MyProject/>}/>
          </Routes>
      </div>
      {/* <div className='dms-portofolio-my-project-footer'>
          <p align="center">Created By : Dimas Kumara</p>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
