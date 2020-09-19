import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Offices from "./pages/Offices";
import Office from "./pages/Office";
import { Provider } from 'react-redux';
import store from "./store";


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/offices/:officeId" component={Office}/>
                    <Route path="/" component={Offices}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
