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

export default NEW_CLIENT