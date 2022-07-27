import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "./styles.css"
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
//serviceWorker.unregister();