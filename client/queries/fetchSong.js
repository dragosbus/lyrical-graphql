import gql from 'graphql-tag'

const query = gql `
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
export default query
