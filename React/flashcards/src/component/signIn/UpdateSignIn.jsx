import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import AccountDataServices from '../../service/AccountDataServices'

class SignInComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.id,
            username: '',
            password: ''
        }

    }
    onSubmit(values){
        let account={
            id: this.state.id,
            username: this.state.username,
            password: values.password
        }
        AccountDataServices.retrieveAccount(account).then(()=>this.props.history.push('/UpdateAccount'))
    }
    render(){
        let{id,username,password}=this.state
        return(
            <div>
                <div>
                <h3>Signing in</h3>
                </div>
                <Formik initialValues ={{id,username,password}}
                onSubmit={this.onSubmit}
                enableReinitialize={true}
                >

                </Formik>
            </div>
        )
    }
}
export default SignInComponent;