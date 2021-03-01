import React, { Component } from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

class ViewCard extends Component{
    render() {
        return(
            <div className = "viewCardpage">
                <Link to = "home"><button className= "button2">home</button></Link>
                <Card/>
                
                
            </div>
        )
    }
}
export default ViewCard