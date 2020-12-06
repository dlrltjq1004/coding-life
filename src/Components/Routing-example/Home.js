import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    state = {

    }
    
    render() {
        return (
            <section className="container">
                <ul>
                    <li>
                        <Link to="/games">
                            <span><img src="images/games.png" alt="games" width="65" /></span>
                            <h3>Games</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tutorial">
                            <span><img src="images/tutorial.png" alt="tutorial" width="65" /></span>
                            <h3>Tutorial</h3>
                        </Link>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Home;