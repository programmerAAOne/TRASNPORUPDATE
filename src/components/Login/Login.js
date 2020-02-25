import React, { Component } from 'react';
import '../styles/stylesNav.css'
import Navbar from '../Navbar/Navbar'
class Login extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container ">

                    <div className="row secondary mt-4 justify-content-around align-items-center ">
                        <form>
                            <h1>GETECSA TRANSPORT</h1>
                            <div className="form-group">
                               
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>




            </div>
        )
    }
}
export default Login;