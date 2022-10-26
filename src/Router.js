import React, { Component } from 'react';
import MenuRutas from './components/MenuRutas';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import Customer from './components/Customers';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>

                <MenuRutas />
                <Routes>
                    <Route path='/' element={<Customer/>} />



                </Routes>



            </BrowserRouter>

        )
    }
}
