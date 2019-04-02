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


export { NEW_CLIENT, UPDATE_CLIENT }