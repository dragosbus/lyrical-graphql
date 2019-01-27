import gql from 'graphql-tag'

export const likeMutation = gql`
	mutation likeLyric($id: ID!) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`
