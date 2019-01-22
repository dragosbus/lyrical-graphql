import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'

const mutation = gql`
	mutation deleteMutation($id: ID) {
		deleteSong(id: $id) {
			title
		}
	}
`

class SongList extends Component {
	constructor(props) {
		super(props)
		this.deleteSong = this.deleteSong.bind(this)
	}
	deleteSong(song) {
		this.props.mutate({
			variables: {
				id: song.id
			},
			refetchQueries: [{query}]
		})
		console.log(song)
	}
    renderSongs() {
        return this.props.data.songs.map(song => (
            <li key={song.id} className="collection-item">
							{song.title}
							<i 
								className="material-icons" 
								onClick={() => this.deleteSong(song)}
							>
								delete
							</i>
						</li>
        ))
    }
    render() {
        const { loading } = this.props.data
        if (loading) return <div>Loading</div>
        const { songs } = this.props.data
        return (
            <div>
            	<ul className="collection">{this.renderSongs()}</ul>
            	<Link to="/songs/new" className="btn-floating btn-large red light">
            		<i className="material-icons">add</i>
            	</Link>
            </div>
        );
    }
}

export default graphql(mutation)(graphql(query)(SongList))
