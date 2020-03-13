import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../../App.js';
import '../styles/stylesNav.css'
import logo from '../../assest/wheel.svg';
import perfil from '../../assest/Uber1.jpg'

class Navbar extends Component {
  render() {
    return (

      <nav className="barra fixed-top justify-content-around navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" to="/Adduser"><h3>Getecsa Administrador</h3></Link>
        <img src={logo} className="App-logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="ac nav-item ">
            <Link className="nav-link" to="/Home">Inicio<span className="sr-only">(current)</span></Link>  
            </li>
            <li className="ac nav-item">
            <Link className="nav-link" to="/RouteStepOne">Rutas</Link>  
            </li>
            <li className="ac nav-item">
              <a className="nav-link" href="#">Empresas</a>
            </li>
            <li className="ac nav-item">
              <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Choferes</a>
            </li>
            <li className="ac nav-item">
              <a className="nav-link" href="#">Vehículos</a>
            </li>
            <li className="ac nav-item">
              <a className="nav-link" href="#">Reportes</a>
            </li>
            <li className="ac nav-item">
              <a className="nav-link" href="#">Salir</a>
            </li>

          </ul>
          <li className="li-perfil">
                <Link to="/Login"><img src={perfil} className="perfil" /></Link> 
          </li>
        </div>
      </nav>


    )
  }
}
export default Navbar 