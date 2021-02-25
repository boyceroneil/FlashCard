import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class LogOutPage extends Component{
    render() {
        return(
            <div className = "page">
                <h1>THANK YOU FOR USING FLASHCARDS, HAVE A NICE DAY!</h1>
                <Link to = "/"><button className= "button2">back to welcome page</button></Link>
            </div>
        )
    }
}
export default LogOutPage