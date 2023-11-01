import { useState } from 'react';
import './portfolio.css';
import {AiTwotoneMail,AiFillPhone} from 'react-icons/ai'; 

const Contact = () =>{

  const [fullinfo,setinfo]=useState({
    fname:"",
    email:"",
    phone:"",
    msg:""
  })

  const handleChange = (e)=>{
    const value=e.target.value;
    const name=e.target.name;

    setinfo((prev)=>{
     return {
      ...prev,
      [name]:value,
     }
    })
  }

  const handleClick = (e)=>{

    console.log(e.target.value);
    setinfo({
      fname:"",
      email:"",
      phone:"",
      msg:""
    });

    if(fullinfo.fname!=="" && fullinfo.email!=="" && fullinfo.phone!=="" && fullinfo.msg!==""){
      alert("thanks for feedback");
    }
    else{
      alert("enter data !");
    }
    
  }
    return(
      <div className='contact-section contact1' id='contact'>
        <h2>Contact <span>me</span></h2>
      
        <div className='contact-form'>

             <div className='inp'>
             <input type='text' value={fullinfo.fname} onChange={handleChange} placeholder='enter your name' name='fname'/>
             </div>

             <div className='inp'>
              <input type='email' value={fullinfo.email} onChange={handleChange} placeholder='enter your mail' name='email' />
             </div>

             <div className='inp'>
              <input type='number' value={fullinfo.phone} onChange={handleChange} placeholder='enter phone number'name='phone' />
             </div>

             <div className='inp'>

                <textarea value={fullinfo.msg} onChange={handleChange} placeholder='message' name='msg'></textarea>

             </div>


           <button type='submit' onClick={handleClick}>Submit</button>


        <div className='mycontact'>

          <p><AiTwotoneMail/> : dharkarpranav48@gmail.com</p>
          <p><AiFillPhone/> : 8983760045</p>
        </div>

        </div>

      </div>
    )
}

export default Contact;