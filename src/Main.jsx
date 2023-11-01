import './portfolio.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import newimg from './newimg.jpg';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Main = () => {

    const [text] = useTypewriter({
        words: ['front end developer..', 'Student and Learner..', 'singer..', 'programmer..'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    });
    return (

        <div className='main-section home1' id='home'>
            <div className='right-part'>

                <div className='image'>
                    <img src={newimg} />
                </div>

            </div>

            <div className='left-part'>
                <h1>Myself pranav <span>dharkar</span></h1>
                <h2> I am a <span>{text}</span><Cursor /></h2>

                <p>I am a programming explorer and enthusiastic and currently getting some really good experience in computer science.
                    and wanted to explore skills, learn from experience and add new opportunities to my
                    lifeset.</p>


                <div className='profile-btn'>

                   <div className='btn-border'>

                    <button><a href='https://github.com/pranav0045'>github <FaGithub /> </a></button>
                   </div>

                   <div className='btn-border'>

                    <button><a href='https://www.linkedin.com/in/pranav-dharkar-a60235248/'>Linkedin <AiFillLinkedin/></a></button>
                   </div>

                </div>
            </div>


        </div>
    )
}

export default Main;