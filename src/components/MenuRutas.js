import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <h1>Menu Rutas</h1>


                {/* <!-- A grey horizontal navbar that becomes vertical on small screens --> */}
                <nav className="navbar navbar-expand-sm bg-light">

                    <div className="container-fluid">
                        {/* <!-- Links --> */}
                        <ul class="navbar-nav">
                            <li className="nav-item bg-danger">
                                <a className="nav-link text-light" href="#">Link 1</a>
                            </li>
                            <li className="nav-item bg-danger">
                                <a className="nav-link text-light" href="#">Link 2</a>
                            </li>
                            <li className="nav-item bg-danger ">
                                <a className="nav-link text-light" href="#" >Link 3</a>
                            </li>
                        </ul>
                    </div>

                </nav>

            </div>
        )
    }
}
