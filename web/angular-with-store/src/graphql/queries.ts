/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      city
      ceremonys {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        city
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const headCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getCeremony = /* GraphQL */ `
  query GetCeremony($id: ID!) {
    getCeremony(id: $id) {
      id
      title
      customerID
      city
      customer {
        id
        name
        city
        createdAt
        updatedAt
      }
      guests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCeremonys = /* GraphQL */ `
  query ListCeremonys(
    $filter: ModelCeremonyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCeremonys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        customerID
        city
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
      id
      ceremonyID
      contact
      ceremony {
        id
        title
        customerID
        city
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ceremonyID
        contact
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
