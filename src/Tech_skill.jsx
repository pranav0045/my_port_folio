 import './portfolio.css';
 import html1 from './html1.png';
 import css1 from './css1.png';
 import js1 from './js1.png';
 import react1 from './react1.png';
 import c1 from './c1.png';
 import cpp1 from './cpp1.png';
 import jv from './jv.png';
 import gt from './gt.png';


 const Tech_skill = () =>{

    return(
        <div className='skill-section2'>

        <h2>Technical skills</h2>
         <div className='technical'>

           <div id='load'>
            <img src={html1}/>
            <div id='html' className='black'>
               90%
            </div>
           </div>

           
           <div id='load'>
            <img src={css1}/>
            <div id='css' className='black'>
             70%
            </div>
           </div>

           
           <div id='load'>
            <img src={js1}/>
            <div id='js' className='black'>
             60%
            </div>
           </div>

           
           <div id='load'>
            <img src={react1}/>
            <div id='react' className='black'>
             45%
            </div>
           </div>

           
           <div id='load'>
            <img src={c1}/>
            <div id='c' className='black'>
              60%
            </div>
           </div>
           
           <div id='load'>
            <img src={cpp1}/>
            <div id='cpp' className='black'>
             70%
            </div>
           </div>

           
           <div id='load'>
            <img src={jv}/>
            <div id='java' className='black'>
             60%
            </div>
           </div>

           
           <div id='load'>
            <img src={gt}/>
            <div id='github' className='black'>
             50%
            </div>
           </div>
             
              
         </div>

     </div>
    )
}

export default Tech_skill;