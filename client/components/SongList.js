import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'


class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => (
            <li key={song.id} className="collection-item">
							{song.title}
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

export default graphql(query)(SongList)
