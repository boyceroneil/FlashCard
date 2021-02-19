import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogOutPage from './LogOutPage'
import HomePage from './HomePage'
import WelcomePage from './WelcomePage'

class RouterComponent extends Component {
    render(){
        return(
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
                        <Route path="/home" exact component={HomePage} />
                        <Route path="/logout" exact component={LogOutPage}/>
                    </Switch>
                </>
            </Router>
        )
    }
}
export default RouterComponent