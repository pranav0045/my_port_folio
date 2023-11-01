import './portfolio.css';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Tech_skill from './Tech_skill';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Navside from './Navside';
import { useState } from 'react';
import { Fa500Px } from 'react-icons/fa';

function App() {
  const [isOpen,setOpen]=useState(false);

  return(
    <div className='main-container'>
       <Navbar var1={isOpen} fun={()=>{
        setOpen(!isOpen);
       }}/>
       <Navside open={isOpen} fun2={()=>{
        setOpen(!isOpen);
       }} />
       <Main/>
       <About/>
       <Skills/>
       <Tech_skill/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>

  ) 
}

export default App;
