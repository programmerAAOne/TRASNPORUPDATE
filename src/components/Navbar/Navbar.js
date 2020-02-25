import React,{ Component } from 'react';
import '../styles/stylesNav.css'
import logo from '../../assest/wheel.svg';
class Navbar extends Component{
    constructor(){
        super();
        this.state={
            title:'Aplicacion de tareas',
            ntaks: 10
        }
    }
    render(){
        return(
            <nav className=" barra justify-content-between navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand" href="#"><h3>Getecsa Transport</h3></a>
            <img src={logo} className="App-logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Rutas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Empresas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Choferes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Vehículos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Reportes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Salir</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
export default Navbar 