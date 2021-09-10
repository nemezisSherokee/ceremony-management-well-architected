/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateCeremony = /* GraphQL */ `
  subscription OnCreateCeremony {
    onCreateCeremony {
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
export const onUpdateCeremony = /* GraphQL */ `
  subscription OnUpdateCeremony {
    onUpdateCeremony {
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
export const onDeleteCeremony = /* GraphQL */ `
  subscription OnDeleteCeremony {
    onDeleteCeremony {
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
export const onCreateGuest = /* GraphQL */ `
  subscription OnCreateGuest {
    onCreateGuest {
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
export const onUpdateGuest = /* GraphQL */ `
  subscription OnUpdateGuest {
    onUpdateGuest {
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
export const onDeleteGuest = /* GraphQL */ `
  subscription OnDeleteGuest {
    onDeleteGuest {
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
