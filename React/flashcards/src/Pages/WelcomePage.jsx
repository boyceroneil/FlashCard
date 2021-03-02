import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import AccountDataServices from '../service/AccountDataServices'
class WelcomePage extends Component{
    
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: ''
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleCreation = this.handleCreation.bind(this)
         
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
    handleCreation(){
        let account ={
            id: this.state.id,
            username: this.state.username,
            password: this.state.password
        }
        AccountDataServices.registerAccount(account).then(this.props.history.push('/home'))
        
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
                        <td><button className= "button4" onClick ={this.handleCreation}>Create Account</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default WelcomePage