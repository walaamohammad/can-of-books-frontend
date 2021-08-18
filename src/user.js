import React, { Component } from 'react'
import user from "./user"

export class user extends Component {
    render() {
        return (
            <div>
                <h1>name: {this.props.username}</h1>
                <h1>department: {this.props.department}</h1>
                <h1>book: {this.props.book}</h1>
                <button onClick={()=>this.props.deleteUser(this.props.userId)}>Delete</button>
            </div>
        )
    }
}

export default user