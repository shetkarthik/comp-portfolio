import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Projects from './components/projects/project.js';
import { TrendVibe } from './components/projects/trendvibe/trendvibe.jsx';
import {CureHub} from './components/projects/curehub/curehub.jsx';
import { ECMA } from './components/projects/ecma/ecma.jsx';
import { FundEx } from './components/projects/fundex/fundex.jsx';
import { Resume } from './components/resume/resume.jsx';
import Footer from './components/footer/footer.jsx';



const App = ()=>{
   return (
    <>
      <BrowserRouter>
        <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='projects' element={<Projects/>}></Route>
          <Route path='trendvibe' element={<TrendVibe/>}></Route>
          <Route path='curehub' element={<CureHub/>}></Route>
          <Route path='ecma' element={<ECMA/>}></Route>
          <Route path='fundex' element={<FundEx/>}></Route>
          <Route path='resume' element={<Resume/>}></Route>
  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   );
}


export default App;

