import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import NEW_CLIENT from '../../mutations'
class newClient extends Component {
  state = {
    client: {
      name: '',
      lastName: '',
      age: '',
      company: '',
      type: ''
    },
    error: false,
    emails: []
  }

  readField = i => event => {
    const temporalEmail = this.state.emails.map((email, index) => {
      if (i !== index) return email
      console.log({email})
      console.log({...email})
      return {
        ...email,
        email: event.target.value
      }
    })

    this.setState({
      emails : temporalEmail
    })

    console.log(this.state.emails)
  } 

  newField = () => {
    this.setState({
      emails: this.state.emails.concat([{email: ''}])
    })
  }

  deleteField = i => () => {
    this.setState({
      emails: this.state.emails.filter((email, index) =>  i !== index)
    })
  }
  render() {
    const {error} = this.state
    let response = (error) ? <p className="alert alert-danger p-3 text-center"> 
        All fields are required.</p> : ''
    return (
      <Fragment>
        <h2 className="text-center"> New client</h2>
        {response}
        <div className="row justify-content-center">
          <Mutation mutation={NEW_CLIENT} onCompleted={()=> this.props.history.push('/')}>
            {addClient => (
              <form className="col-md-8 m-3"
                onSubmit={e => {
                  e.preventDefault()
                  const { name, lastName, age, company, type } = this.state.client
                  if (name === '' || lastName === '' || age === '' || 
                      company === '' || type === '') {
                    this.setState({
                      error: true
                    })
                    return
                  }

                  this.setState({
                    error: false
                  })
                  const {emails} = this.state
                  const input = {
                    name,
                    lastName,
                    age: Number(age),
                    emails,
                    company,
                    type
                  }
                  console.log({input})
                  addClient({
                    variables: { input }
                  })
                }}
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name"
                      onChange={e => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            name: e.target.value
                          }
                        })
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                      onChange={e => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            lastName: e.target.value
                          }
                        })
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Company</label>
                    <input type="text" className="form-control" placeholder="Company"
                      onChange={e => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            company: e.target.value
                          }
                        })
                      }} />
                  </div>
                  {this.state.emails.map((input, index) => (
                    <div key={index} className="form-group col-md-12">
                      <label> Email { index + 1}</label>
                      <div className="input-group">
                        <input
                          onChange={ this.readField(index)} 
                          type="email" placeholder="Email" className="form-control"/>
                        <div className="input-group-append">
                          <button
                            onClick={ this.deleteField(index)}
                            type="button" className="btn btn-danger">
                           &times; Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="form-group d-flex justify-content-center col-md-12">
                      <button onClick={this.newField}
                      type="button"
                      className="btn btn-warning">
                        + Add Email
                      </button>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Age</label>
                    <input type="number" className="form-control" placeholder="Age"
                      onChange={e => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            age: e.target.value
                          }
                        })
                      }} />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Client Type</label>
                    <select className="form-control"
                      onChange={e => {
                        this.setState({
                          client: {
                            ...this.state.client,
                            type: e.target.value
                          }
                        })
                      }}>
                      <option value="">Select...</option>
                      <option value="PREMIUM">PREMIUM</option>
                      <option value="BASIC">BASIC</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-success float-right">Save</button>
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    )
  }
}

export default newClient