import { graphql } from '@/__generated__';

export const GET_FEED = graphql(/* GraphQL */ `
	query GET_FEED {
		posts {
			id
			title
			content
			image_url
			createdAt
			updatedAt
			author {
				email
				username
				profile {
					firstName
					lastName
					bio
					images {
						url
						type
					}
				}
			}
		}
	}
`);
