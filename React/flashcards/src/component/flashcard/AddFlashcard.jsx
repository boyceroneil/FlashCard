import React, {Component} from 'react'
import FlashCardDataService from '../../service/FlashCardDataService'
import { Formik, Form, Field } from 'formik'

class AddFlashcard extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            question: '',
            answer: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(){
        let flashcard ={
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer
        }
        FlashCardDataService.registerFlashcard(flashcard)
        .then(this.props.history.push('/RegisterFlashCard'))
    }
  
    render(){
        let {id, question, answer} = this.state
        return(
            <div>
                <Formik
                initialValues ={{id,question,answer}}
                handleSubmit={this.handleSubmit}
                enableReinitialize ={true} >
                    {(props)=>(
                        <Form>
                            <fieldset>
                                <label>Id: </label>
                                <Field type="text" disabled/>
                            </fieldset>
                            <fieldset>
                                <label>question: </label>
                                <Field type="text" onChange={this.handleChange} />
                            </fieldset>
                            <fieldset>
                                <label>answer: </label>
                                <Field type="text" onChange={this.handleChange}/>
                            </fieldset>
                            <button type="submit"> Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )

    }
}

export default AddFlashcard;