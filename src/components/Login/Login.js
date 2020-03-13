import React, { Component } from 'react';
import '../styles/Login.css'
import Navbar from '../Navbar/Navbar'
class Login extends Component {
    render() {
        return (
            <div className="App">

                <div className="container ">

                    <div className="row cajalogin mt-4 justify-content-around align-items-center ">
                        <form>
                            <h1>GETECSA TRANSPORT</h1>
                            <div className="form-group mt-5">
                               
                                <input placeholder="Ingrese correo o usuario" type="email" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mt-3">
                                <input placeholder="Contraseña..." type="password" className="form-control input" id="exampleInputPassword1" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary mt-4 mb-5">Iniciar Sesión</button>
                        </form>
                    </div>
                    <br></br>
                   
                </div>




            </div>
        )
    }
}
export default Login;