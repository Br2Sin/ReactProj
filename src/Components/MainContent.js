import React from "react";

import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './Auth/Login';
import Dashboard from "./Dashboard";
import Resetpassword from "./Auth/Resetpassword";

const MainContent = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/resetpassword" component={Resetpassword}/>

            </Switch>        
        </BrowserRouter>
    </div>
);
export default MainContent;