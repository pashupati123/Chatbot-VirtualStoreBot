import React, { Component } from 'react'

export class Userinfo extends Component {
    render() {
        return (
            <div>
                hi {this.props.name}
            </div>
        )
    }
}

export default Userinfo
