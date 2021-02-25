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
    }
    onSubmit(values){
        let flashcard = {
            id: this.state.id,
            question: values.question,
            answer: values.answer
        }
        FlashCardDataService.updateFlashCard(flashcard).then(()=> this.props.history.push('/RegisterFlashCard/:id/:question/:answer'))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        
                        <div>
                        <div>
                        <label>Id:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled></input>
                        </div>

                        <label>question</label>
                <input type="text" name="question" onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <label>answer</label>
                <input type="text" name="answer" onChange={this.handleChange}></input>
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