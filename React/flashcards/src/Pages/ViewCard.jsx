import React, { Component } from 'react';
import Card from './Card';

class ViewCard extends Component{
    render() {
        return(
            <div className = "page">
                <h1>CARD PAGE</h1>
                <Card/>
            </div>
        )
    }
}
export default ViewCard