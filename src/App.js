import React, { Component, Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/header'
import Clients from './components/client'
import newClient from './components/client/new'
import editClient from './components/client/edit'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQlError }) => {
    console.error('networkError', networkError)
    console.error('graphQlError', graphQlError)
  }
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header/>
            <div className="container mt-4">
              <Switch>
                <Route exact path="/" component={Clients}></Route>
                <Route exact path="/client/edit/:id" component={editClient}></Route>
                <Route exact path="/client/new" component={newClient}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App
