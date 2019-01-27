import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const SongById = gql `
	query songById($id: ID) {
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
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }
    componentDidMount() {
        const { match, data } = this.props
        console.log(data)
        if (data.loading) this.setState({ data: 'loading' })

        console.log(this.props)
    }
    render() {
        const { data } = this.state
        if (data === 'loading') return <div>Loading</div>
        return (
            <div>
				<h3>Song</h3>
			</div>
        );
    }
}

export default graphql(SongById, {
    options: props => ({
        variables: { id: props.params.id }
    })
})(SongDetail)
