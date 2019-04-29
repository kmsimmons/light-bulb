import React, { Component } from 'react';

export default class OnOffButton extends Component {
    constructor(props){
        super(props)
          this.state = {
            clicked: 'off',
            color: 'white'
        }
    }

    clickButton = () => {

        let newClicked = this.state.clicked === 'on' ? 'off' : 'on'
        let newColor = this.state.color === 'white' ? 'yellow' : 'white'
        this.setState({clicked: newClicked, color: newColor})
    }

    render(){
        let { clicked } = this.state
        let styles = {
            borderStyle: 'solid',
            borderWidth: 'thin',
            background: this.state.color,
            height: '100px',
            width: '100px'
        }

        return(
            <div>
            <h1>Light Switch</h1>
            <button style={styles} onClick = {this.clickButton}>{ clicked }</button>
            </div>
        )
    }
}
