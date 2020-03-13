import React, { Component } from 'react'
import '../styles/RouteList.css'

class RouteStepOne extends Component {
    state = {
        Ruta: 'Santa Fe',
        Empresa: 'Getecsa',
        Horario: '12:30-14:00',
        Chofer: 'Patrick Martinez',
        ClaveUnidad: 'MNU-2020',
        Status: 'Activo',
        DiasOperacion: 'L M J V'
    }
    render() {
        let ruta = this.state.Ruta;
        let empresa = this.state.Empresa;
        let horario = this.state.Horario;
        let chofer = this.state.Chofer;
        let claveUnidad = this.state.ClaveUnidad;
        let status = this.state.Status
        let diasOperacion = this.state.DiasOperacion

        return (
 <div className="container">
     <div className=" xxx row">

              <div className="caja-roja">

              </div>
                <div className="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Ruta</th>
                                <th scope="col">Empresa</th>
                                <th scope="col">Horario</th>
                                <th scope="col">Chofer</th>
                                <th scope="col">Clave Unidad</th>
                                <th scope="col">Status</th>
                                <th scope="col">Dias de Operación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{ruta}</th>
                                <td>{empresa}</td>
                                <td>{horario}</td>
                                <td>{chofer}</td>
                                <td>{claveUnidad}</td>
                                <td>{status}</td>
                                <td className="font-weight-bold">{diasOperacion}</td>
                            </tr>
                            <tr>
                                <th scope="row">{ruta}</th>
                                <td>{empresa}</td>
                                <td>{horario}</td>
                                <td>{chofer}</td>
                                <td>{claveUnidad}</td>
                                <td>{status}</td>
                                <td className="font-weight-bold">{diasOperacion}</td>
                            </tr>
                            <tr>
                                <th scope="row">{ruta}</th>
                                <td>{empresa}</td>
                                <td>{horario}</td>
                                <td>{chofer}</td>
                                <td>{claveUnidad}</td>
                                <td>{status}</td>
                                <td className="font-weight-bold">{diasOperacion}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}

export default RouteStepOne