import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {likeMutation} from '../queries/mutations.js'

class LyricList extends Component {
	onLike(id, likes) {
		this.props.mutate({
			variables: {
				id
			},
			optimisticResponse: {
				__typeName: 'Mutation',
				likeLyric: {
					id,
					__typeName: 'LyricType',
					likes: likes + 1,
				}
			}
		})
	}
	render() {
		return (
			<ul>
				{
					this.props.lyrics.map(lyric => (
						<li key={lyric.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
							<i onClick={() => this.onLike(lyric.id, lyric.likes)} className="material-icons">thumb_up</i>
							<p>{lyric.content}</p>
							<p>{lyric.likes}</p>
						</li>
					))
				}
			</ul>
		);
	}
}

export default graphql(likeMutation)(LyricList)
