import p1 from './p1.JPG';
import p2 from './p2.JPG';
import p3 from './p3.JPG';
import p4 from './p4.JPG';
import p5 from './p5.JPG';
import p6 from './p6.JPG';
import './portfolio.css';
const Projects = () =>{

    return(

        <div className='project-section project1' id='project'>

            <h2> <span>my</span> Projects</h2>

            <div className='projects'>

                <div className='cards' id='card1'>
                <div className='card'>
                    <div className='card-img'>   
                     <a href='https://pranav0045.github.io/musical_web/'><img src={p1}/></a>
                     
                    </div>

                    <h3>Music app</h3>
                    <h4>Tech:html,css,javascript</h4>
                
                    <p>this is a ui of a music app built using html css and javascript.</p>

                    <a href='https://github.com/pranav0045/musical_web'><button>Source code</button></a>

                </div>

                </div>


                <div className='cards' id='card2'>
                <div className='card'>
                    <div className='card-img'>   
                     <a href=' https://pranav0045.github.io/dino_game/'><img src={p2}/></a>
                     
                    </div>

                    <h3>Dino Game</h3>
                    <h4>Tech:javaScript</h4>
                
                    <p>A simple javaScript dino game built using css animations and js dom .</p>

                    <a href='https://github.com/pranav0045/dino_game'><button>Source code</button></a>

                </div>

                </div>




                <div className='cards' id='card3'>
                <div className='card'>
                    <div className='card-img'>   
                     <a href='https://pranav0045.github.io/gametictac.github.io/'><img src={p3}/></a>
                     
                    </div>

                    <h3>Tic Tac Toe</h3>
                    <h4>Tech:javaScript</h4>
                
                    <p>this is a simple tic tac toe game built using html,css and javaScript.</p>

                    <a href='https://github.com/pranav0045/gametictac.github.io'><button>Source code</button></a>

                </div>

                </div>



                <div className='cards' id='card4'>
                <div className='card'>
                    <div className='card-img'>   
                     <a href='https://pranav0045.github.io/nike_clone_home/'><img src={p4}/></a>
                     
                    </div>

                    <h3>Nike clone</h3>
                    <h4>Tech:html,css,js</h4>
                
                    <p>nike clone it is a responsive web page built using html,css and javascript.</p>

                    <a href='https://github.com/pranav0045/nike_clone_home'><button>Source code</button></a>

                </div>

                </div>

                <div className='cards' id='card5'>
                <div className='card'>
                    <div className='card-img'>   
                     <a href=' https://pranav0045.github.io/play-music/'><img src={p5}/></a>
                     
                    </div>

                    <h3>spotify music page</h3>
                    <h4>Tech:javaScript</h4>
                
                    <p>this is a spotify music page with music enabled built using javascript.</p>

                    <a href='https://github.com/pranav0045/play-music'><button>Source code</button></a>

                </div>

                </div>


                <div className='cards'id='card6'>
                <div className='card'>
                    <div className='card-img'>   
                     <a href='https://pranav0045.github.io/notes_taker_app/'><img src={p6}/></a>
                     
                    </div>

                    <h3>note taking app</h3>
                    <h4>Tech:react js</h4>
                
                    <p> my first react project can create and delete a note.</p>

                    <a href='https://github.com/pranav0045/notes_taker_app'><button>Source code</button></a>

                </div>

                </div>





            </div>

        </div>

    )
}

export default Projects;