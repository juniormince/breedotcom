import React, { Component } from 'react';

//now with style
import '../../styles/main.css';

//comps
import Mix from '../Mix/Mix';
// import Nav from '../Nav/Nav';
import Header from '../Header/Header';

class Home extends Component {


    render() {
        return (
            <div className="container">
                <Header />
                <div className="home">
                    <p>
                        quiet zone. please speak softly.
                    </p>

                    <Mix />

                </div>
            </div>
        );
    }
}

export default Home;