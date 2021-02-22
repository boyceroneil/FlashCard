import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component{
    render() {
        return(
            <div className = "page">
                <h1>WELCOME, USER</h1>
                <table id ='homeTable'>
                    <tr>
                        <Link to = "viewCard"><button className = 'button1'>VIEW CARDS</button></Link>
                        <Link to = "createCard"><button className = 'button1'>CREATE CARDS</button></Link>
                    </tr>
                </table>
            </div>
        )
    }
}
export default HomePage