import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./n1-main/m1-ui/u2-header/Header";
import {MyRoutes} from "./n1-main/m1-ui/u7-routes/MyRoutes";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <MyRoutes/>
            </HashRouter>
        </div>
    );
}

export default App;
