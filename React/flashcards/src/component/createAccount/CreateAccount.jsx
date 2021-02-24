import React, {Component} from 'react'
import AccountDataServices from '../../service/AccountDataServices'

class CreateAccount extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            username='',
            password=''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(){
        let account ={
            id: this.state.id,
            username: this.state.username,
            password: this.state.password
        }
        AccountDataServices.registerAccount(account).then(this.props.history.push('/AccountCreation'))
        
    }

    render(){
        return(
            <div>
                <h3>Create your account</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        
                        <div>
                        <label>username</label>
                <input type="text" name="username" onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <label>password</label>
                <input type="text" name="password" onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    
                    
                    </form>
                </div>

            </div>
        )
    }

}
export default CreateAccount;