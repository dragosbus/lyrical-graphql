import React, { Component } from 'react';

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    render() {
        const { title } = this.state
        return (
            <div>
							<h3>Create a new song</h3>
							<form>
								<label>Song title:</label>
								<input value={title} onChange={event => this.setState({title: event.target.value})}/>
							</form>
						</div>
        );
    }
}

export default SongCreate
