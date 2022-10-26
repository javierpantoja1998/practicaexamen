import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class HijoCustomer extends Component {
    state = {
        cliente: {},
        status: false
    }

    cargarCliente = () => {
        var id = this.props.id;
        console.log(id);
        var request = "/customers.json/" + id;
        var url = Global.urlCustomers + request;

    }
    componentDidMount = () => {
        this.cargarCliente();
    }
    render() {
        return (
            <div>
                <h1>Hijo Customer</h1>
            </div>
        )
    }
}

