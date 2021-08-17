import React from 'react'
import { useQuery, gql } from '@apollo/client'

const BOOKS_GQL = gql`
  query getBooks {
    books {
      title
      author
    }
  }
`

interface Book {
  title: string
  author: string
}

const GetBooks: any = () => {
  const { data, error, loading } = useQuery<{ books: Array<Book> }>(BOOKS_GQL)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data!.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ))
}

export default GetBooks
