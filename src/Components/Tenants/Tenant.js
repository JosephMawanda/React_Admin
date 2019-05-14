import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  EditButton,
  DeleteButton,
  Button,
  SimpleForm,
  TextInput,
  DisabledInput,
  Create,
} from 'react-admin';


//creting a tenant
const TenantCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Create>
);

//viewing the tenantList
const TenantList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
      {/* <Button>Add Payment</Button>
      <Button>Add Expense</Button>
      <Button>Send Notice</Button> */}
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

//editing/ deleting a tenant
const TenantEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Edit>

);

// list guessors for demonstration purposes
const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Create>
);

// list guessors for demonstration purposes
const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
      {/* <Button>Add Payment</Button>
      <Button>Add Expense</Button>
      <Button>Send Notice</Button> */}
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

//editing/ deleting a tenant
const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Edit>

);
export {TenantCreate, TenantList, TenantEdit, UserCreate, UserList, UserEdit};