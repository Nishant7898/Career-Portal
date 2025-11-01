import React from 'react';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Chooseyour from './components/Chooseyour';
import RegisterAsCandidate from './components/RegisterAsCandidate';
import Loginform from './components/Loginform';
import Jobsection from './components/Jobsection';
import Jobsubmit from './components/Jobsubmit';

const App = () => {
  return (
    <div className='bg-gray-100'>
     
      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/choose'element={<Chooseyour/>}/>
        <Route path='/candidate' element={<RegisterAsCandidate/>}/>
        <Route path='/login'element={<Loginform/>}/>
        <Route path='/jobs'element={<Jobsection/>}/>
        <Route path='/submit' element={<Jobsubmit/>}/>
      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
