import gql from 'graphql-tag'

const NEW_CLIENT = gql`
  mutation addClient($input: ClientInput){
    addClient(input: $input) {
      id
      name
      lastName
      company
    }
}`


const UPDATE_CLIENT = gql`
  mutation updateClient($input: ClientInput){
    updateClient(input: $input){
      name,
      lastName
    }
}`

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!){
    deleteClient(id: $id)
  }
`

export { NEW_CLIENT, UPDATE_CLIENT, DELETE_CLIENT }