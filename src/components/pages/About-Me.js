import nicePhoto from '../images/nice_coat.jpg';

function AboutMe() {
    return (
        <div className='about-me d-flex content'>
            <div>
                <h2>About Me</h2>
                <p>Hello there! My name is John-Mark Sackett, and I'm a full stack web developer with a passion for backend
                    development living in the small town of Athens,
                    Pennsylvania.</p>
                <p>I have aptitudes in GIT, html, CSS, Sequelize, Node.js and Javascript, with a passion for sequelize
                    database
                    management and api query building.</p>
            </div>
            <img src={nicePhoto} alt='Portrait' />
        </div>
    )
}

export default AboutMe;