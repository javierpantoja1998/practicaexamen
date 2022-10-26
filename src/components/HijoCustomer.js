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
        var request = "/customers/"+ id + ".json/" ;
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

