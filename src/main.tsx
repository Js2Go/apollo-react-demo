import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

import './index.css'
import App from './App'

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:8899/graphql'
  }),
  cache,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
