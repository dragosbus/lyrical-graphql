import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

const query = gql `
	{
		songs {
			id
			title
		}
	}
`;

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => (
            <li key={song.id} className="collection-item">
							{song.title}
						</li>
        ))
    }
    render() {
        const {loading} = this.props.data
        if (loading) return <div>Loading</div>
        const { songs } = this.props.data
        return (
            <ul className="collection">{this.renderSongs()}</ul>
        );
    }
}

export default graphql(query)(SongList)
