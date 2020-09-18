import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
import Office from "./pages/Offices";
import OfficeView from "./pages/OfficeView";


const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/offices/:officeId" component={OfficeView} />
                <Route path="/" component={Office} />
            </Switch>
        </Router>
    );
}

export default App;
