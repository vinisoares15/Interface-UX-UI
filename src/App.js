import React from 'react';

import {Footer, Blog, Features, Possibility, WhatGPT3, Header } from './containers';
import {Cta, Brand, Navbar} from './components';  //nos imports, todos os parâmetros devem ser importados com letra maúscula no começo
import './App.css';                               //ex: "C"ta, "B"rand, "N"avbar


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <div>
                <Brand/>
                <WhatGPT3/>
                <Features/>
                <Possibility/>
                <Cta/>
                <Blog/>
                <Footer/>
            </div>
        </div>
    )
}

export default App

