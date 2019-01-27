import React, { Component } from 'react';

class LyricList extends Component {
	render() {
		return (
			<ul>
				{
					this.props.lyrics.map(lyric => (
						<li key={lyric.id}>{lyric.content}</li>
					))
				}
			</ul>
		);
	}
}

export default LyricList
