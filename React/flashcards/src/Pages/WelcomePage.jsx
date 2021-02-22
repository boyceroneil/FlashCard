import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomePage extends Component{
    render() {
        return(
            <div className = "page">
                <h1>WELCOME TO FLASHCARDS</h1>
                <h2>please sign in or create an account</h2>
                <table id = "welcomeTable">
                    <tr>
                        <td><h3>username:</h3></td>
                        <td><input type = "text" name = "username" placeholder = "username"/></td>
                        <td><h3>password:</h3></td>
                        <td><input type = "text" name = "password" placeholder = "password"/></td>
                        <td><Link to="/home"><button>submit</button></Link></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><Link to ="/newUserPage"><button>Create Account</button></Link></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default WelcomePage