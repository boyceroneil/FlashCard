import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

class WelcomePage extends Component{
    
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: ''
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
         
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(){
        if (this.state.password == "admin" && this.state.username == "admin") {
            this.props.history.push('/home')
        }
    }
    render() {
        return(
            <div className = "page">
                <h1>WELCOME TO FLASHCARDS</h1>
                <h2>please sign in or create an account</h2>
                <table id = "welcomeTable">
                    <tr>
                        <td><h3>username:</h3></td>
                        <td><input type = "text" name = "username" placeholder = "username" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><h3>password:</h3></td>
                        <td><input type = "password" name = "password" placeholder = "password" onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><button button className= "button3" onClick ={this.handleSubmit}>submit</button></td>
                        <td><Link to= "createCard"><button className= "button4" >Create Account</button></Link></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default WelcomePage