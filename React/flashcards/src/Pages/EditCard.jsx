import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditCard extends Component {
    render() {
        return(
            
            <div className = "editPage">
                <Link to = "home"><button className = "button3">home</button></Link>
                <table id = "cardInputTable">
                    <tr>
                        <td><h2>QUESTION</h2></td>
                        <td><h2>ANSWER</h2></td>
                    </tr>
                    <tr>
                        <td><textarea className = "cardInput"></textarea></td>
                        <td><textarea className = "cardInput"></textarea></td>
                    </tr>
                 
                </table>
                <table id = "table1">
                    <tr>
                        <button className= "button3" >SUBMIT</button>
                        <button className= "button3" >NEXT CARD</button>
                    </tr>
                </table>
            
            </div>
        )
    }
}

export default EditCard