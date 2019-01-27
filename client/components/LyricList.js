import React, { Component } from 'react';

class LyricList extends Component {
	onLike(id) {
		console.log(id)
	}
	render() {
		return (
			<ul>
				{
					this.props.lyrics.map(lyric => (
						<li key={lyric.id}>
							<i onClick={() => this.onLike(lyric.id)} className="material-icons">thumb_up</i>
							{lyric.content}
						</li>
					))
				}
			</ul>
		);
	}
}

export default LyricList
