import React, { Component } from 'react'
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
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(values){
        let flashcard = {
            id: this.state.id,
            question: values.question,
            answer: values.answer
        }
        FlashCardDataService.updateFlashCard(flashcard).then(()=> this.props.history.push(`/RegisterFlashCard/${flashcard.id}/${this.state.question}/${this.state.answer}`))
    }

    render(){
        let{id, question, answer} = this.state
        return(
            <div>
                {/* <Formik
                initialValues={{id,question,answer}}
                onSubmit={this.onSubmit}
                enableReinitialize={true}>
                    {
                        (props) =>(
                            <Form>
                                <fieldset>
                                <label>id</label>
                                <Field type="text" name ="id" disabled/>
                                </fieldset>
                                <fieldset>
                                <label>question</label>
                                <Field type="text" name ="question" />
                                </fieldset>
                                <fieldset>
                                <label>id</label>
                                <Field type="text" name ="id" disabled/>
                                </fieldset>
                                <button type="submit"> Save changes</button>
                            </Form>
                        )
                    }
                </Formik> */}
                <form onSubmit={this.onSubmit}>
                        
                        <div>
                        <div>
                        <label>Id:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled></input>
                        </div>

                        <label>question:</label>
                <input type="text" name="question" onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <label>answer:</label>
                <input type="text" name="answer" onChange={this.handleChange} ></input>
                        </div>

                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    
                    
                    </form>
                </div>

        )
    }
}
export default UpdateFlashCard;