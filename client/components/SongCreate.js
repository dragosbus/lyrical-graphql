import React, { Component } from 'react';

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()
    }

    render() {
        const { title } = this.state
        return (
            <div>
							<h3>Create a new song</h3>
							<form onSubmit={this.onSubmit}>
								<label>Song title:</label>
								<input value={title} onChange={event => this.setState({title: event.target.value})}/>
							</form>
						</div>
        );
    }
}

export default SongCreate
