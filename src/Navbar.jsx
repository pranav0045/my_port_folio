
import './portfolio.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
const Navbar = ({fun,var1}) => {
 
    
    return (
         <div className='Navbar'>
            <div className='right'>
                <h2>Pra<span>nav</span></h2>
            </div>

            <div className='left'>

                <ul className='nav-list'>
                    <li className='del'><a href='#home'>Home</a></li>
                    <li className='del'><a href='#about'>About</a></li>
                    <li className='del'><a href='#skill'>Skills</a></li>
                    <li className='del'><a href='#project'>Projects</a></li>
                    <li className='del'><a href='#contact'>Contact</a></li>
                    <li className='hamburgur'onClick={fun}> {var1 ?<AiOutlineClose/>:<GiHamburgerMenu/>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;