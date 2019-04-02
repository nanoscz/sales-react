import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'

import { CLIENT_QUERY } from '../../queries'
import FormEditClient from './form/edit.client'
class editClient extends Component {
  state = {}
  render() {
    const { id } = this.props.match.params
    return (
      <Fragment>
        <h2 className="text-center">Edit client</h2>
        <div className="row d-flex justify-content-center">
        <Query query={CLIENT_QUERY} variables={{ id }}>
          {({ loading, error, data, refetch }) => {
            if (loading) return 'loading...'
            if (error) return `Error: ${error.message}`
            console.log({ data })
            return (
              <FormEditClient client={data.getClientByID} refetch={refetch}/>
            )
          }}
        </Query>
        </div>
      </Fragment>
    )
  }
}

export default editClient