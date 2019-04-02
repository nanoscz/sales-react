import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo'
import { withRouter } from "react-router-dom";

import { UPDATE_CLIENT } from '../../../mutations'
class FormEditClient extends Component {

  state = {
    client: this.props.client,
    emails: this.props.client.emails
  }

  newField = () => {
    this.setState({
      emails: this.state.emails.concat([{ email: '' }])
    })
  }

  readField = i => e => {
    const nuevoMail = this.state.emails.map((email, index) => {
      if (i !== index) return email;
      return { ...email, email: e.target.value };
    });
    this.setState({ emails: nuevoMail });
  }

  deleteField = i => () => {
    this.setState({
      emails: this.state.emails.filter((s, index) => i !== index)
    });
  }



  render() {

    const { name, lastName, age, company, type } = this.state.client
    const { emails } = this.state;

    return (
      <Fragment>
        <Mutation mutation={UPDATE_CLIENT} onCompleted={() => this.props.refetch().then(() => {
          this.props.history.push('/')
        })}>
          {updateClient => (
            <form className="col-md-8 m-3"
              onSubmit={e => {
                e.preventDefault()
                const { id, name, lastName, age, company, type } = this.state.client
                const { emails } = this.state.client
                const input = {
                  id,
                  name,
                  lastName,
                  age: Number(age),
                  emails,
                  company,
                  type
                }
                console.log(input)
                updateClient({
                  variables: { input }
                })
              }}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={name}
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
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={lastName}
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
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={company}
                    onChange={e => {
                      this.setState({
                        client: {
                          ...this.state.client,
                          company: e.target.value
                        }
                      })
                    }}
                  />
                </div>

                {emails.map((input, index) => (
                  <div key={index} className="form-group col-md-12">
                    <label>Email {index + 1} : </label>
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder={`Email`}
                        className="form-control"
                        onChange={this.readField(index)}
                        defaultValue={input.email}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={this.deleteField(index)}>
                          &times; Delete
                  </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="form-group d-flex justify-content-center col-md-12">
                  <button
                    onClick={this.newField}
                    type="button"
                    className="btn btn-warning"
                  >+ Add Email</button>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Age</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={age}
                    onChange={e => {
                      this.setState({
                        client: {
                          ...this.state.client,
                          age: e.target.value
                        }
                      })
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Client Type</label>
                  <select
                    className="form-control"
                    value={type}
                    onChange={e => {
                      this.setState({
                        client: {
                          ...this.state.client,
                          type: e.target.value
                        }
                      })
                    }}
                  >
                    <option value="">Select...</option>
                    <option value="PREMIUM">PREMIUM</option>
                    <option value="BASIC">BASIC</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">Edit Client</button>
            </form>

          )}
        </Mutation>
      </Fragment>
    )
  }
}


export default withRouter(FormEditClient);