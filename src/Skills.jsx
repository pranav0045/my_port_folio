import './portfolio.css';


const Skills = () => {
    return (
        <div className='skill-section skill1' id='skill'>
            <h2>My <span>Skills</span></h2>
            <div className='tech-skills'>

                <div className='radial-bars'>
                    <div className='radial-bar'>

                        <svg className='skills' x="0px" y="0px" viewBox='0 0 200 200'>

                            <circle className='progress-bar' cx="100" cy="100" r="40"></circle>
                            <circle className='path path-1' cx="100" cy="100" r="40"></circle>


                        </svg>
                          
                          

                        <div className='percentage'>80%</div>
                        <div className='Text'>Communication</div>

                    </div>



                    <div className='radial-bar'>

                        <svg className='skills' x="0px" y="0px" viewBox='0 0 200 200'>

                            <circle className='progress-bar' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>
                            <circle className='path path-2' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>
                        </svg>

                        <div className='percentage'>70%</div>
                        <div className='Text'>Presentation</div>

                    </div>



                    <div className='radial-bar'>

                        <svg className='skills' x="0px" y="0px" viewBox='0 0 200 200'>

                            <circle className='progress-bar' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>
                            <circle className='path path-3' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>

                        </svg>

                        <div className='percentage'>70%</div>
                        <div className='Text'>problem solving</div>

                    </div>



                    <div className='radial-bar'>

                        <svg className='skills' x="0px" y="0px" viewBox='0 0 200 200'>

                            <circle className='progress-bar' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>
                            <circle className='path path-4' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>
                        </svg>

                        <div className='percentage'>65%</div>
                        <div className='Text'>Leader-ship</div>

                    </div>


                    <div className='radial-bar'>

                        <svg className='skills' x="0px" y="0px" viewBox='0 0 200 200'>
                            <circle className='progress-bar' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>
                            <circle className='path path-5' style={{ backgroundColor: "black" }} cx="100" cy="100" r="40"></circle>

                        </svg>

                        <div className='percentage'>80%</div>
                        <div className='Text'>analytical</div>

                    </div>

                </div>




            </div>
        </div>
    )

}

export default Skills;