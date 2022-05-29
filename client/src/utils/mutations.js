import { gql } from "@apollo/client";

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
`;

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

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
      _id
      username
      books {
        _id
        bookId
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!) {
    saveBook(bookId: $bookId) {
      _id
      bookId
      authors
      description
      image
      link
      title
    }
  }
`;

// REMOVE_BOOK
