import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import FlashCardDataService from '../../service/FlashCardDataService'

class UpdateFlashCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            question: this.props.match.params.question,
            answer: this.props.match.params.answer
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(values){
        let flashcard = {
            id: this.state.id,
            question: values.question,
            answer: values.answer
        }
        FlashCardDataService.updateFlashCard(flashcard).then(()=> this.props.history.push('/RegisterFlashCard'))
    }

    render(){
        let {id, question, answer} = this.state
        return(
            <div>
                <Formik
                initialValues ={{id,question,answer}}
                onSubmit={this.onSubmit}
                enableReinitialize ={true} >
                    {(props)=>(
                        <Form>
                            <fieldset>
                                <label>Id</label>
                                <Field type="text" disabled/>
                            </fieldset>
                            <fieldset>
                                <label>question</label>
                                <Field type="text" />
                            </fieldset>
                            <fieldset>
                                <label>answer</label>
                                <Field type="text" />
                            </fieldset>
                            <button type="submit"> Update</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default UpdateFlashCard;