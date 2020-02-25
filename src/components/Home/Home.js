import React, { Component } from 'react'
import '../styles/stylesNav.css';
import '../../App.css'
import Navbar from '../Navbar/Navbar';
import { todos } from '../../todos.json';
import TodoForm from '../TodoForm/Todoform'
console.log(todos)
class Home extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container ">
                             <h1 className="titulo">Bienvenido Jesus a GTE Transport</h1>
                    <div className="row secondary mt-4 justify-content-around align-items-center ">
                        <div className=" box col-md-5 ">
                        <img className="iconHome mt-5" src={require('../../assest/carretera.svg')}/>
                            <h2  className="mt-2">Rutas</h2>
                        </div>
                        <div className="box1  col-md-5 " >
                            <img className="iconHome mt-5" src={require('../../assest/conductor.svg')}/>
                            <h2 className="mt-2">Choferes</h2>
                        </div>
                        <div className=" box2 col-md-5">
                        <img className="iconHome mt-5" src={require('../../assest/conductor.svg')}/>
                            <h2 className="mt-2">Reportes</h2>
                        </div>
                        <div className="box3  col-md-5 ">
                        <img className="iconHome mt-5" src={require('../../assest/conductor.svg')}/>
                            <h2 className="mt-2">Vehiculos</h2>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>


             

            </div>
        );

    }
}

export default Home