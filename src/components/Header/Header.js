import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//now with style
import '../../styles/main.css';

const Header = ({ title }) => (
    <div className="header">
        <div />
        <Router>
            <div>
                <div>
                    <h1 className="hellobree">{title}</h1>
                    <h2>leave a message.</h2>
                </div>
            </div>
        </Router>
    </div>
);

export default Header;