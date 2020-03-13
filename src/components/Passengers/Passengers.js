import React, { Component } from 'react'
import '../styles/Passengers.css'
export default class Passengers extends Component {
    render() {
        return (
            // Contenedor Principal
            <div className="container">
                {/* Contenedor flotante */}
                <div className="p-container">
                    <div className="p-head">
                        <div className="d-flex justify-content-center">
                            <h3 >Información del Usuario</h3>
                        </div>
                        {/* Cargar Imagen */}
                        <form class="md-form">
                                        <div className="file-field">
                                            <div className="mb-4 d-flex justify-content-center">
                                                <img className="imagen-p" src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                                                    className="rounded-circle z-depth-1-half avatar-pic" alt="example placeholder avatar" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <div className="btn btn-mdb-color ">
                                                    
                                                    <input type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                           {/* Fin de Cargar Imagen  */}
                        <div className="row form-rgc">
                            <div className="col-lg-12">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputName">Nombre</label>
                                            <input type="text" class="form-control" id="inputName" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputlastname">Apellidos</label>
                                            <input type="text" className="form-control" id="inputlastname" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" class="form-control" id="inputEmail" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputClave">Clave de Usuario</label>
                                            <input type="text" class="form-control" id="inputClave" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword">Contraseña</label>
                                            <input type="password" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                 
                                    {/* Contenedor de titulo e imagen */}
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
