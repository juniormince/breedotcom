import React from 'react';


//now with style
import '../../styles/main.css';

const Header = ({ title }) => (
    <div className="header">
        <div />
        <Router>
            <div>
                <div><h1 className="lead">{title}</h1>
                    <h2>the forum of the future!</h2></div>
            </div>
        </Router>
    </div>
);
