import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import HijoCustomer from './HijoCustomer';

export default class Customers extends Component {
    selector = React.createRef();

    state = {
      customers: [],
      status: false
    }

    cargarCustomers = () => {
      var request = "/customers.json";
      var url = Global.urlCustomers + request;
      axios.get(url).then(response => {
        this.setState({
          customers:response.data.results,
          status:true,
          
        });
      });

    }

    componentDidMount = () => {
      this.cargarCustomers();
    }
    render() {
      return (
        <div>
          <h1>Customer</h1>
          <form>
             <select>

                {
                  this.state.customers.map((clientes, index)=>{
                    return(<option key={index}>{clientes.contactName}</option>)
                  })
                }


             </select>



          </form>
        </div>
      )
    }


}
