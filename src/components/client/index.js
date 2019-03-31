import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import CLIENTS_QUERY from '../../queries'

import { ListGroup } from 'react-bootstrap';
const contact = () => (
  <Query query={CLIENTS_QUERY} pollInterval={1000}>
    {({ loading, error, data, startPolling, stopPolling }) => {
      if (loading) return 'loading...'
      if (error) return `Error: ${error.message}`
      return (
        <Fragment>
          <h2>List Client</h2>
          <ListGroup>
            {data.getClients.map(item => (
              <ListGroup.Item key={item.id}>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-8">{item.name} {item.lastName} - {item.company}</div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <Link to={`/client/edit/${item.id}`} className="btn btn-outline-primary">Edit</Link>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Fragment>
      )
    }}
  </Query>
)

export default contact