import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.style.client.css"
import {findUserByUsername} from "../../services/LoginService";
import {createHashHistory} from "history";
import {createUser} from "../../services/RegisterService";
import User from "../user/User";
import UserNoId from "../user/UserNoId";

class RegisterComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            username:'',
            password:'',
            createSucceed:false,
            role:"CUSTOMER_USER",
        }
    }

    createUser = () =>{
        const user = new UserNoId(
            this.state.username,
            this.state.password,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            this.state.role
        )
        createUser(user)
            .then(rsp=>{
                if( rsp.username === null){
                    alert("The Username existed!");
                    createHashHistory().push('/register')
                }
                else if(this.state.username !== rsp.username){
                    alert("something wrong here. Failed to register");
                    createHashHistory().push('/register')
                } else {
                    alert("Succeed to register");
                    createHashHistory().push('/login')
                }
            })
            .catch(rsp=>
                   {    alert("something wrong here. Failed to register");
                        createHashHistory().push('/register');}
            )


    }

    updateForm=(newState)=>{
        this.setState(newState);
    }

    checkUser=()=>{
        if(this.state.username.length === 0){
            alert("illegal username");
            createHashHistory().push('/register')
            return;
        } else if(this.state.password.length === 0){
            alert("illegal password");
            createHashHistory().push('/register')
            return;
        } else if(this.state.password !== this.state.checkPassword){
            alert("password should match");
            createHashHistory().push('/register')
            return;
        } else {
            this.createUser();
        }
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="form-row col-md-5">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <form action="../user/profile.template.client.html">

                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="usernameFld" className="col-5 col-md-2 col-form-label">
                            <h5> Username </h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input className="form-control wbdv-field wbdv-username"
                                   onChange={
                                       event =>
                                           this.updateForm({
                                                               ...this.state,
                                                               username: event.target.value
                                                           })
                                   }
                                   value={this.state.username}
                                   id="usernameFld"
                                   placeholder="Alice"/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="passwordFld" className="col-5 col-md-2 col-form-label">
                            <h5>Password</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                   onChange={
                                       event =>
                                           this.updateForm({
                                                               ...this.state,
                                                               password: event.target.value
                                                           })
                                   }
                                   value={this.state.password}
                                   id="passwordFld" placeholder="123qwe#$%"/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="verifyPasswordFld" className="col-5 col-md-2 col-form-label">
                            <h5>Verify Password</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input type="password"
                                   onChange={
                                       event =>
                                           this.updateForm({
                                                               ...this.state,
                                                               checkPassword: event.target.value
                                                           })
                                   }
                                   value={this.state.checkPassword}
                                   className="form-control wbdv-field wbdv-password-verify"
                                   id="verifyPasswordFld" placeholder="123qwe#$%"/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                    <label htmlFor="roleFld" className="col-5 col-md-2 col-form-label">
                        <h5>Choose your role</h5>
                    </label>
                    <div className="col-12 col-md-8 ml-auto">
                        <select
                            value={this.state.role&&this.state.role.length>0?this.state.role:"CUSTOMER_USER"}
                            className="custom-select wbdv-field wbdv-role"
                            onChange={
                                event =>
                                {this.updateForm({
                                                     ...this.state,
                                                     role: event.target.value
                                                 }); }
                            }
                            id="roleFld">
                            <option value="CUSTOMER_USER">Customer</option>
                            <option value="OWNER_USER">Restaurant</option>
                            <option value="DELIVERER_USER">Deliverer</option>
                            <option value="ADMIN_USER">Admin</option>
                        </select>
                    </div>
                    <div className="col-md-1"></div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-md-3 col-form-label"></label>
                        <div className="col-12 col-md-8">
                            <button id="registerBtn"
                                    type="button"
                                    onClick={this.checkUser}
                                    className="btn btn-primary btn-block wbdv-button wbdv-register">
                                <h5>Sign up</h5>
                            </button>
                            <div className="form-row">
                                <div className="col-6">
                                    <a href="#/login"
                                       className="wbdv-link wbdv-login">
                                        <h5>Log in</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default RegisterComponent;


