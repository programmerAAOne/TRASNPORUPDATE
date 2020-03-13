import React, { Component } from 'react'
import '../styles/RegisterCompany.css'
export default class RegisterCompany extends Component {
    render() {
        return (
            // Contenedor Principal
            <div className="container">
                {/* Contenedor Flotante  */}
                <div className="rgc-box ">
                    {/* Contenedor de Forms */}
                    <div className="rcg-head ">
                        {/* Contenedor de titulo e imagen */}
                        <div className=" row ">
                            <div className="rgc-c-image col-lg-3 col-md-12 d-flex align-items-center justify-content-center">

                                <img className="rgc-p-image" src={require('../../assest/james.jpg')} />
                            </div>
                            <div className=" rgc-title col-lg-9 col-md-12 d-flex align-items-center justify-content-center">
                                <h2>Datos de Empresa</h2>
                            </div>
                        </div>
                        {/* Contenedor de Formulario */}
                        <div className="row form-rgc">
                            <div className="col-lg-12">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Nombre</label>
                                            <input type="text" class="form-control" id="inputName" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputRfc">RFC</label>
                                            <input type="text" className="form-control" id="inputRfc" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputAddress">Dirección</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Ingrese su dirección" />
                                    </div>
                                    <div class="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="businessName">Razón Social</label>
                                            <input type="text" class="form-control" id="businessName" />
                                        </div>
                                    </div>
                                      {/* Contenedor de titulo e imagen */}
                                    <div className=" row ">
                                        <div className="rgc-c-image col-lg-3 col-md-12 d-flex align-items-center justify-content-center">

                                            <img className="rgc-p-image" src={require('../../assest/james.jpg')} />
                                        </div>
                                        <div className=" rgc-title col-lg-9 col-md-12 d-flex align-items-center justify-content-center">
                                            <h2>Datos de Contacto</h2>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Nombre</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputRfc">Numero Telefónico</label>
                                            <input type="text" className="form-control" id="inputRfc" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Nombre de Usuario</label>
                                            <input type="text" className="form-control" id="inputName" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputRfc">Correo electronico</label>
                                            <input type="email" className="form-control" id="inputRfc" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Contraseña</label>
                                            <input type="password" className="form-control" id="inputName" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </form>
                            </div>
                        </div>
                        {/* Contenedor datos de Contacto */}
                    </div>
                </div>
            </div>
        )
    }
}
