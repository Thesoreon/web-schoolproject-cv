import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

/* Components */
import Homepage from "./homepage.component";
import Navigation from "./navigation.component";

export default class Index extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Homepage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}