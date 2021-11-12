import beverageViber from '../images/Beverage_Viber.png';
import noteTaker from '../images/Note_Taker.png';
import quizzesCocktails from '../images/Quizzes&Cocktails.png';
import weatherSite from '../images/Weather_Search_Site.png';
import wishTrip from '../images/the_wish_trip.png';

function Projects() {
    return (
        <section className="work content" >
            <h2>Work</h2>
            <p>Below, you will see a selection of some of the projects I have completed or contributed to since my start
                as a web developer. The work most note-worthy would definitely be the group projects I helped complete,
                and the rest showcased will be swapped out as my skills grow and I complete more complex and thorough
                programs and web pages.</p>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-6 border">
                        <a className="The_Beverage_Viber" href="https://guarded-meadow-10732.herokuapp.com/">The Beverage
                            Viber
                            Group Project
                            <img src={beverageViber} className="img-thumbnail"
                                alt="thumbnail for the beverage viber group project" />

                        </a>
                    </div>
                    <div className="col-6 border">
                        <a id="Quizzes_and_Cocktails" href="https://sf487552.github.io/Group-Project-1/"> Quizzes &
                            Cocktails
                            Group Project
                            <img src={quizzesCocktails} className="img-thumbnail"
                                alt="thumbnail of the deployed quizes and cocktails group project" />
                        </a>
                    </div>
                    <div className="col-6 border">
                        <a className="pinned-homework" href="https://the-wish-trip.herokuapp.com/">The Wish Trip
                            <img src={wishTrip} className="img-thumbnail"
                                alt="thumbnail for The Wish Trip group project" />
                        </a>
                    </div>
                    <div className="col-6 border">
                        <a className="pinned-homework" href="https://kalmnir.github.io/Weather-Dashboard/">Weather Dashboard
                            <img src={weatherSite} className="img-thumbnail"
                                alt="Thumbnail for the weather search site application" />
                        </a>
                    </div>
                    <div className="col-6 border">
                        <a className="pinned-homework" href="https://arcane-fortress-25540.herokuapp.com/">Note Taker
                            <img src={noteTaker} className="img-thumbnail"
                                alt="Thumbnail of the note taker application" />

                        </a>
                    </div>


                </div>
            </div>
        </section>
    )
};

export default Projects;