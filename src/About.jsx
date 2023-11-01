import './portfolio.css';
import aboutimg from './aboutimg.jpg';

const About = () =>{

    return (
        <div className='about-section main-section about1' id='about'>

            <div className='right-part'>

              <div className='image'>

                <img src={aboutimg}/>
              </div>

            </div>

            <div className='left-part2'>

                
                <h2>About <span>me</span></h2>
                

                <p>I am pranav dharkar currently studying in diploma
                    computer engineering ,i stay in pune and my aim is to become a software developer i have completed my schooling from New times international school where i secured 91 percentage and my interest towards coding enforced me to do engineering.</p>

                <p>skills i am familiar with are front end development,designer and other soft skills are  communication and presentation, i believe in doing that's why i choose development over any other field as part of my interest.</p>

                <p>talking about other activities i like to play music,singing and vibe with it. I also like playing cricket and i keep exploring multiple skills and ideas.</p>
            </div>

        </div>
    )
}
export default  About;