import React from 'react';

import {footer, blog, features, possibility, WhatGPT3, header } from './containers';
import {cta, brand, navbar} from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <navbar/>
                <header/>
            </div>
            <div>
                <brand/>
                <WhatGPT3/>
                <features/>
                <possibility/>
                <cta/>
                <blog/>
                <footer/>
            </div>
        </div>
    )
}

export default App

