import React from 'react';
import MainPage from "../src/pages/MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            {/*<div>*/}
            {/*    <img src="https://booktaxi.co.il/wp-content/uploads/2019/03/logo-150-50.png" alt="logo"/>*/}
            {/*</div>*/}
            <Switch>
                <Route path='/' render={(props) => <MainPage {...props}/>}/>
            </Switch>
        </Router>
    );
}

export default App;
