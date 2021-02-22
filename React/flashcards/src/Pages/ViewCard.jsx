import React, { Component } from 'react';
import Card from './Card';

class ViewCard extends Component{
    render() {
        return(
            <div className = "page">
                <button>home</button>
                <Card/>
                
            </div>
        )
    }
}
export default ViewCard