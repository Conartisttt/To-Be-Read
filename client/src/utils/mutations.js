import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($book: BookData!) {
  saveBook(book: $book) {
    _id
    username
    books {
        authors
        bookId
        image
        title
        pages
    }
  }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        books {
          authors
          bookId
          image
          title
          pages
        }
    }
}
`

export const UPDATE_BOOK_IS_READ_STATUS = gql`
mutation updateBookIsReadStatus($bookId: String!, $isRead: Boolean!) {
  updateBookIsReadStatus(bookId: $bookId, isRead: $isRead) {
    bookId
    title
    authors
    pages
    isRead
    isReading
    }
  }
`;

export const UPDATE_BOOK_IS_READING_STATUS = gql`
mutation updateBookIsReadingStatus($bookId: String!, $isReading: Boolean!) {
  updateBookIsReadingStatus(bookId: $bookId, isReading: $isReading) {
    bookId
    title
    authors
    pages
    isRead
    isReading
    }
  }
`;