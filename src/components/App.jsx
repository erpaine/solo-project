import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';

import '../stylesheets/styles.scss';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Pantry</h1>
                <MainContainer />
            </div>
        )
    }
}

export default App;