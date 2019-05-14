import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  Create,
} from 'react-admin';


//creting a Expense
const ExpenseCreate = props => (
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

//viewing the ExpenseList
const ExpenseList = props => (
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
    </Datagrid>
  </List>
);

//editing/ deleting a Expense
const ExpenseEdit = props => (
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
    </Datagrid>
  </List>
);

//editing/ deleting a Expense
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
export {ExpenseCreate, ExpenseList, ExpenseEdit, UserCreate, UserList, UserEdit};