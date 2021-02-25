import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>
                    <h1>Welcome flashcard studyguide.</h1>
                    <h2>Sign in <Link to="/AccountSignIn">SignIn</Link></h2>
                    <h2>Create Account <Link to ="/AccountCreation">Create</Link></h2>
                    <h3>Update account <Link to ="/UpdateAccount/:id">UpdateA</Link></h3>
                    <h3>Add cards <Link to ="/RegisterFlashCard">Adding</Link></h3>
                    <h3>Update cards <Link to = "/ListOfFlashCard">All cards</Link></h3>

                </div>
            </div>
        )
    }
}
export default WelcomeComponent;