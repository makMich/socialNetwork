import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, {addPost, subscribe, updateNewPostText} from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();

