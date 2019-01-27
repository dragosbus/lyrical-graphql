import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from 'react-router'
import LyricCreate from './LyricCreate'

const SongById = gql `
	query songById($id: ID!) {
		song(id: $id) {
			id
			title
			lyrics {
				id
				likes
				content
			}
		}
	}
`

export class SongDetail extends Component {
    render() {
        const { data } = this.props
        const { song } = data
        if (!song) return <div>Loading</div>

        return (
            <div>
            	<Link to="/">back</Link>
							<h3>{song.title}</h3>
							<LyricCreate/>
						</div>
        );
    }
}

export default graphql(SongById, {
    options: props => ({
        variables: { id: props.params.id }
    })
})(SongDetail)
