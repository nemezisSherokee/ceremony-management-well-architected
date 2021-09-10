/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createCeremony = /* GraphQL */ `
  mutation CreateCeremony(
    $input: CreateCeremonyInput!
    $condition: ModelCeremonyConditionInput
  ) {
    createCeremony(input: $input, condition: $condition) {
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
export const updateCeremony = /* GraphQL */ `
  mutation UpdateCeremony(
    $input: UpdateCeremonyInput!
    $condition: ModelCeremonyConditionInput
  ) {
    updateCeremony(input: $input, condition: $condition) {
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
export const deleteCeremony = /* GraphQL */ `
  mutation DeleteCeremony(
    $input: DeleteCeremonyInput!
    $condition: ModelCeremonyConditionInput
  ) {
    deleteCeremony(input: $input, condition: $condition) {
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
export const createGuest = /* GraphQL */ `
  mutation CreateGuest(
    $input: CreateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    createGuest(input: $input, condition: $condition) {
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
export const updateGuest = /* GraphQL */ `
  mutation UpdateGuest(
    $input: UpdateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    updateGuest(input: $input, condition: $condition) {
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
export const deleteGuest = /* GraphQL */ `
  mutation DeleteGuest(
    $input: DeleteGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    deleteGuest(input: $input, condition: $condition) {
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
