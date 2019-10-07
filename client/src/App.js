import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>EMAILY</p>
            </header>
            <p className="App-intro">
                To get started, click below!
            </p>
                <a href="/auth/google"> Sign In With Google</a> 
        </div>
    );
}

export default App;
