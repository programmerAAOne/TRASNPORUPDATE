import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import '../styles/Adduser.css'


class Adduser extends Component {

    render() {
        return (
            <div >
                <div className="container  justify-content-center align-items-center  ">

                    <div className="row caja mt-4 ">
                        <div className="lista  col-md-4">

                            <div className="buscar">
                                <form class="form-inline my-2 my-lg-0 ">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="listcard mt-2">
                                <img className="item " src={require('../../assest/james.jpg')} />
                                <h7 className="name">Juan Martinez Osorio</h7>
                            </div>
                            <div className="listcard mt-2">
                                <img className="item " src={require('../../assest/juan.jpeg')} />
                                <h7 className="name">Juan Martinez Osorio</h7>
                            </div>


                        </div>
                        <div className="registro col-md-8">
                            <div className="botones">
                                <button type="button" class="boton btn btn-danger btn-lg">Eliminar</button>
                                <button type="button" class=" boton btn btn-primary btn-lg ml-3 mr-3">Editar</button>
                            </div>

                            <div className="foto">
                                <img className="item-profile " src={require('../../assest/james.jpg')} />

                                <h2 className="name-profile">Juan Martinez Osorio</h2>
                            </div>

                            <div className="formulario">

                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >Nombre</label>
                                            <input type="text" class="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Apellidos</label>
                                            <input type="text" class="form-control" id="inputLastName" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >Número Télefonico</label>
                                            <input type="text" class="form-control" id="inputPhone" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Correo</label>
                                            <input type="email" class="form-control" id="inputEmail" />
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label >Nombre de Usuario</label>
                                            <input type="text" class="form-control" id="inputPhone" />
                                        </div>
                                        <div className="form-group col-md-">
                                            <label >Contraseña</label>
                                            <input type="email" class="form-control" id="inputEmail" />
                                        </div>
                                        <div className="form-group col-md-">
                                            <label >Clave de Usuario</label>
                                            <input type="email" class="form-control" id="inputEmail" />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Registar</button>
                                </form>



                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>




            </div>
        )
    }
}

export default Adduser;