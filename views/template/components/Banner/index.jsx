import React, { Component } from 'react'

/**
*
* @ author: 
* @ email: 
* @ date: 2020-09-19 22:11
*/
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img:'https://picsum.photos/1200/400'
        }
    }
    render() {
        return (
            <div className="banner">
                <img alt="" src={this.state.img}/>
            </div>
        )
    }
}


export default index