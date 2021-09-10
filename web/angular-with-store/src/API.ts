/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  name: string,
  city: string,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  name: string,
  city: string,
  ceremonys?: ModelCeremonyConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCeremonyConnection = {
  __typename: "ModelCeremonyConnection",
  items?:  Array<Ceremony | null > | null,
  nextToken?: string | null,
};

export type Ceremony = {
  __typename: "Ceremony",
  id: string,
  title: string,
  customerID: string,
  city: string,
  customer?: Customer | null,
  guests?: ModelGuestConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGuestConnection = {
  __typename: "ModelGuestConnection",
  items?:  Array<Guest | null > | null,
  nextToken?: string | null,
};

export type Guest = {
  __typename: "Guest",
  id: string,
  ceremonyID: string,
  contact: string,
  ceremony?: Ceremony | null,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  city?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateCeremonyInput = {
  id?: string | null,
  title: string,
  customerID: string,
  city: string,
};

export type ModelCeremonyConditionInput = {
  title?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelCeremonyConditionInput | null > | null,
  or?: Array< ModelCeremonyConditionInput | null > | null,
  not?: ModelCeremonyConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCeremonyInput = {
  id: string,
  title?: string | null,
  customerID?: string | null,
  city?: string | null,
};

export type DeleteCeremonyInput = {
  id: string,
};

export type CreateGuestInput = {
  id?: string | null,
  ceremonyID: string,
  contact: string,
  content: string,
};

export type ModelGuestConditionInput = {
  ceremonyID?: ModelIDInput | null,
  contact?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelGuestConditionInput | null > | null,
  or?: Array< ModelGuestConditionInput | null > | null,
  not?: ModelGuestConditionInput | null,
};

export type UpdateGuestInput = {
  id: string,
  ceremonyID?: string | null,
  contact?: string | null,
  content?: string | null,
};

export type DeleteGuestInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items?:  Array<Customer | null > | null,
  nextToken?: string | null,
};

export type ModelCeremonyFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelCeremonyFilterInput | null > | null,
  or?: Array< ModelCeremonyFilterInput | null > | null,
  not?: ModelCeremonyFilterInput | null,
};

export type ModelGuestFilterInput = {
  id?: ModelIDInput | null,
  ceremonyID?: ModelIDInput | null,
  contact?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelGuestFilterInput | null > | null,
  or?: Array< ModelGuestFilterInput | null > | null,
  not?: ModelGuestFilterInput | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCeremonyMutationVariables = {
  input: CreateCeremonyInput,
  condition?: ModelCeremonyConditionInput | null,
};

export type CreateCeremonyMutation = {
  createCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCeremonyMutationVariables = {
  input: UpdateCeremonyInput,
  condition?: ModelCeremonyConditionInput | null,
};

export type UpdateCeremonyMutation = {
  updateCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCeremonyMutationVariables = {
  input: DeleteCeremonyInput,
  condition?: ModelCeremonyConditionInput | null,
};

export type DeleteCeremonyMutation = {
  deleteCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGuestMutationVariables = {
  input: CreateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type CreateGuestMutation = {
  createGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGuestMutationVariables = {
  input: UpdateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type UpdateGuestMutation = {
  updateGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGuestMutationVariables = {
  input: DeleteGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type DeleteGuestMutation = {
  deleteGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items?:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCeremonyQueryVariables = {
  id: string,
};

export type GetCeremonyQuery = {
  getCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCeremonysQueryVariables = {
  filter?: ModelCeremonyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCeremonysQuery = {
  listCeremonys?:  {
    __typename: "ModelCeremonyConnection",
    items?:  Array< {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGuestQueryVariables = {
  id: string,
};

export type GetGuestQuery = {
  getGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGuestsQueryVariables = {
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuestsQuery = {
  listGuests?:  {
    __typename: "ModelGuestConnection",
    items?:  Array< {
      __typename: "Guest",
      id: string,
      ceremonyID: string,
      contact: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    city: string,
    ceremonys?:  {
      __typename: "ModelCeremonyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCeremonySubscription = {
  onCreateCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCeremonySubscription = {
  onUpdateCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCeremonySubscription = {
  onDeleteCeremony?:  {
    __typename: "Ceremony",
    id: string,
    title: string,
    customerID: string,
    city: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      name: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    guests?:  {
      __typename: "ModelGuestConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGuestSubscription = {
  onCreateGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuestSubscription = {
  onUpdateGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuestSubscription = {
  onDeleteGuest?:  {
    __typename: "Guest",
    id: string,
    ceremonyID: string,
    contact: string,
    ceremony?:  {
      __typename: "Ceremony",
      id: string,
      title: string,
      customerID: string,
      city: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
