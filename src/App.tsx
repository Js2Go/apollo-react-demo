import React, { SyntheticEvent, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import GetBooks from './components/GetBooks'
import { gql, useMutation } from '@apollo/client'

const MU_GQL = gql`
  mutation mu($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`

function App() {
  const [count, setCount] = useState(0)
  const [mutate] = useMutation(MU_GQL)
  
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0]
    mutate({ variables: { file } })
  }

  return (
    <div className="App">
      <GetBooks />
      <input type="file" onChange={handleChange} name="" id="" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
