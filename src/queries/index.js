import gql from 'graphql-tag'

const CLIENTS_QUERY = gql `query {
  getClients{
    id
    name
    lastName
    company
    type
  }
}`

export default CLIENTS_QUERY