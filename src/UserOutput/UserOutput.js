import React, { Component } from 'react';
import '../UserOutput/UserOutput.css';


class UserOutput extends Component {

    render() {
        return (
            <div className="para">
                <p onClick = {this.props.click}>Hi, Pooja. How are you my dear? {this.props.username}</p>
                <p>I'm fine Aditya. How are you my love. {this.props.userlady}</p>
            </div>
        )
    }

}


export default UserOutput;