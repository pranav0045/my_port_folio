import './portfolio.css';
import { AiOutlineClose } from 'react-icons/ai';
const Navside = ({open,fun2}) => {
    return (
    open && <div className='Navside'>
           
            <div className='nav-list-container'>
            <li className='hamburgur'onClick={fun2}><AiOutlineClose/></li>   
             <div className='Navbar'>
               <div className='right'>
                <h2>Pra<span>nav</span></h2>
              </div>
            </div>


                <ul className='nav-list2'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skill'>Skills</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navside;