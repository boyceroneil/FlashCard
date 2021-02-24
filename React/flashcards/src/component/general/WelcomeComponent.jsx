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
                    <h2>Sign in <Link to="/AccountSignIn"></Link></h2>
                    <h2>Create Account<Link to ="/AccountCreation"></Link></h2>
                </div>
            </div>
        )
    }
}
export default WelcomeComponent;