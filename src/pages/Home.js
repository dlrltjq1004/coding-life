import React from "react";
import "./Home.css";

class Home extends React.Component {

    state = {

    }
    
    render() {
        return (
            <section className="container">
                <ul>
                    <li>
                        <a href="/games">
                            <span><img src="images/games.png" alt="games" width="65" /></span>
                            <h3>Games</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/tutorial">
                            <span><img src="images/tutorial.png" alt="tutorial" width="65" /></span>
                            <h3>Tutorial</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/tutorial">
                            <span><img src="" alt="Tech" width="65" /></span>
                            <h3>Tech</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/tutorial">
                            <span><img src="" alt="Projects" width="65" /></span>
                            <h3>Projects</h3>
                        </a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Home;