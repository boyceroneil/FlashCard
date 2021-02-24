import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import signIn from '../signIn/SignIn'
import create from '../createAccount/CreateAccount'
import flashcard from '../flashcard/AddFlashcard'
import WelcomeComponent from '../general/WelcomeComponent'
import LogOut from '../general/LogOutComponent'
class RouterComponent extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/'><WelcomeComponent/></Route>
                        <Route path='/AccountCreation' component={create}/>
                        <Route path='/AccountSignIn' component={signIn}/>
                        <Route path='/flashcard/:id' component = {flashcard}/>
                        <Route path='/LogOut' component={LogOut}/>
                    </Switch>
                </Router>

            </div>
        )
    }
}
export default RouterComponent;