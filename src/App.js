import './App.css';
import Home from './pages/home/Home';
import ContactUs from './pages/contact-us/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from './pages/about-me/AboutMe';
import WorkExperience from './pages/work-experience/WorkExperience';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about-me' element={<AboutMe/>}/>
            <Route path='work-experience' element={<WorkExperience/>}/>
            <Route path='contact-us' element={<ContactUs/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
