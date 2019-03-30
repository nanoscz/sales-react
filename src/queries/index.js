import gql from 'graphql-tag'

const CLIENT_QUERY = gql `query {
  getClients{
    id
    name
    lastName
    company
    type
  }
}`

export default CLIENT_QUERY