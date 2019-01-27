import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'

const mutation = gql `
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
    deleteSong(id) {
        this.props.mutate({
            variables: {
                id: id
            },
        }).then(() => this.props.data.refetch())
    }
    //used refetch function because the graphql knows the component knows about the query to be refetched(have this.props.data) 
    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => (
            <li key={id} className="collection-item">
							<Link to={`songs/${id}`}>{title}</Link>
							<i 
								className="material-icons" 
								onClick={() => this.deleteSong(id)}
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
