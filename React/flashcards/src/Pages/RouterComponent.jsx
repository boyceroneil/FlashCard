import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogOutPage from './LogOutPage'
import HomePage from './HomePage'
import WelcomePage from './WelcomePage'
import CreateCard from './CreateCard'
import NewUserPage from './NewUserPage'
import ViewCard from './ViewCard'
import EditCard from './EditCard';

class RouterComponent extends Component {
    render(){
        return(
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
                        <Route path="/home" exact component={HomePage} />
                        <Route path="/logout" exact component={LogOutPage}/>
                        <Route path="/createCard" exact component={CreateCard}/>
                        <Route path="/newUserPage" exact component={NewUserPage}/>
                        <Route path="/viewCard" exact component={ViewCard}/>
                        <Route path ="/editCard" exact component={EditCard}/>

                    </Switch>
                </>
            </Router>
        )
    }
}
export default RouterComponent