import '../projects.css';

export default function Projects(){
    return(
        <main id="projects">
            <section className="hero">
                <h1>Explore My Projects</h1>
                <p>Discover a selection of projects that highlight my design and development expertise.</p>
            </section>

            <section className="project">
                <div className="project-item">
                    {/* <img src={projectImage1} alt="Project 1" /> */}
                    <h2>Tangram Man</h2>
                    <p>Different poses of a man achived through CSS and key frame aniations done to give positions of shape.</p>
                    <a href="https://haritha-kotapati.github.io/Tangram-Man/">View Details</a>
                </div>

                <div className="project-item">
                    {/* <img src={projectImage2} alt="Project 2" /> */}
                    <h2>Gif Creator</h2>
                    <p>App that creates gif from filling the color to squares.</p>
                    <a href="https://haritha-kotapati.github.io/Gif-Creator/">View Details</a>
                </div>

            
            </section>

            <section className="project">
                <div className="project-item">
                    {/* <img src={projectImage1} alt="Project 1" /> */}
                    <h2>Useless Website</h2>
                    <p>Try this website, if you are enthusiastic in unscrambling words. An app to tune your eagerness.</p>
                    <a href="https://haritha-kotapati.github.io/Word-Unscramble/">View Details</a>
                </div>

                <div className="project-item">
                    {/* <img src={projectImage2} alt="Project 2" /> */}
                    <h2>Blog Design</h2>
                    <p>A blog about the pets in our day to day life.</p>
                    <a href="https://haritha-kotapati.github.io/Blog-Post/">View Details</a>
                </div>

            
            </section>
        </main>
    )
}


