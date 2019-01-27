import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from 'react-router'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'
import query from '../queries/fetchSong'

export class SongDetail extends Component {
    render() {
        const { data } = this.props
        const { song } = data
        if (!song) return <div>Loading</div>

        return (
            <div>
            	<Link to="/">back</Link>
							<h3>{song.title}</h3>
							<LyricList lyrics={song.lyrics}/>
							<LyricCreate songId={this.props.params.id}/>
						</div>
        );
    }
}

export default graphql(query, {
    options: props => ({
        variables: { id: props.params.id }
    })
})(SongDetail)
