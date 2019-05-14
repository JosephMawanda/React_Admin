import React, { Component } from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { TenantList, UserList,UserEdit, users, UserCreate, TenantEdit, TenantCreate } from './Components/Tenants/Tenant';
import {ExpenseCreate, ExpenseList, ExpenseEdit,} from './Components/Expenses/Expense';
import {PaymentCreate, PaymentList, PaymentEdit,} from './Components/Payments/Payment';
import {PropertyCreate, PropertyList, PropertyEdit,} from './Components/Properties/Property';

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");
  

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
         name="Tenants" 
         list={TenantList}
         edit={TenantEdit} 
         create={TenantCreate} 
         />
        
         <Resource 
          name="Expenses"
          list={ExpenseList}
          edit={ExpenseEdit}
          create={ExpenseCreate}
         />
         <Resource
          name="Payments"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          />
         <Resource  
           name="Properties"
          list={PropertyCreate}
          edit={PropertyEdit}
          create={PropertyCreate}
         />
         <Resource
         //list Guessors for demonstration
         name="users"
         list={UserList}
         edit={EditGuesser} 
         create={UserCreate}
         />
      </Admin>
    );
  }
}

export default App;