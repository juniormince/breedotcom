import React, { Component } from 'react';

//comps
import Mix from '../Mix/Mix';

class Home extends Component {


    render() {
        return (
            <div className="container">
                <header className="header">

                    <p>
                        quiet zone. please speak softly.
                    </p>

                    <Mix/>

                </header>
            </div>
        );
    }
}

export default Home;