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
        .then(this.props.history.push('/'))
    }
    handleUpdate(){
    let flashcard ={
    id: this.state.id,
    question: this.state.question,
    answer: this.state.answer
    }
    FlashCardDataService.updateFlashCard(flashcard).then()
    }
    handleDelete(){
        FlashCardDataService.deleteFlashcard(flashcard).then()
    }
    render(){

    }
}

export default AddFlashcard;