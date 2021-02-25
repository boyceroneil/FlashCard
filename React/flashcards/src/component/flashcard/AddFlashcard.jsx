import React, {Component} from 'react'
import FlashCardDataService from '../../service/FlashCardDataService'

class AddFlashcard extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            question: '',
            answer: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

export default AddFlashcard;