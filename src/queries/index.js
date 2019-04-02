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

const CLIENT_QUERY = gql `
  query getClientByID($id: ID){
    getClientByID(id: $id){
      id
      name
      lastName
      age
      emails {
        email
      }
      company
      type
    }
  }
`

export {CLIENTS_QUERY, CLIENT_QUERY}