import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'

const mutation = gql `
	mutation AddSong($title: String){
		addSong(title: $title) {
			id
			title
		}
	}
`

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    /*after the list with songs was queried and we go to add a new song, 
    the list will not refetch, we have to tell to apollo to do it*/
    onSubmit(event) {
        event.preventDefault()
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{query}]
        }).then(() => hashHistory.push('/'))
    }

    render() {
        const { title } = this.state
        return (
            <div>
            	<Link to="/">back</Link>
							<h3>Create a new song</h3>
							<form onSubmit={this.onSubmit}>
								<label>Song title:</label>
								<input value={title} onChange={event => this.setState({title: event.target.value})}/>
							</form>
						</div>
        );
    }
}

export default graphql(mutation)(SongCreate)
