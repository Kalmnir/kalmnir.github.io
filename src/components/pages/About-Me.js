import nicePhoto from '../images/nice_coat.jpg';

function AboutMe() {
    return (
        <div className='about-me d-flex content'>
            <div>
                <h2>About Me</h2>
                <p>Hello there! My name is John-Mark Sackett, and I'm a full stack web developer with a passion for backend
                    development living in the small town of Athens,
                    Pennsylvania.</p>

                <ul>My Skills</ul>
                <li>GIT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>React</li>
            </div>
            <img src={nicePhoto} alt='Portrait' />
        </div>
    )
}

export default AboutMe;