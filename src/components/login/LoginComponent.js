import React from "react";
import '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.style.client.css"
import {findUser} from "../../services/LoginService";
import {HashRouter} from "react-router-dom";
import { createHashHistory } from 'history'
import User from "../user/User";
import UserNoId from "../user/UserNoId";


class LoginComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            checkPassword:'',
            role:"CUSTOMER_USER",
        }

    }


    updateForm=(newState)=>{
        this.setState(newState);
    }

    checkUser=(event)=>{

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

        findUser(user).then(
            curUser=>{
                this.setState(
                    ()=>{
                        return ({
                            username: curUser.username,
                            checkPassword: curUser.password
                        })
                    }
                );
                if(this.state.checkPassword === this.state.password){
                    createHashHistory().push(`/user/${curUser.id}`)
                } else {
                    alert("please input correct username and password");
                    createHashHistory().push('/login')
                }
                return this.state.checkPassword === this.state.password;
            }
        )
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="form-row col-md-5">
                        <h1>Sign In</h1>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <form action="../user/profile.template.client.html">
                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="username"
                               className="col-5 col-md-1 col-form-label">
                            <h5> Username </h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input className="form-control wbdv-field wbdv-username"
                                   onChange={
                                       event =>
                                       {this.updateForm({
                                           ...this.state,
                                           username: event.target.value
                                       }); }
                                   }
                                   value={this.state.username}
                                   id="username"
                                   placeholder="Please input username"/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="password"
                               className="col-5 col-md-1 col-form-label">
                            <h5>Password</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input type="password"
                                   onChange={
                                       event =>
                                           this.updateForm({
                                                                     ...this.state,
                                                                     password: event.target.value
                                                                 })
                                   }
                                   value={this.state.password}
                                   className="form-control wbdv-field wbdv-password"
                                   id="password" placeholder="Please input password"/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="roleFld"
                               className="col-5 col-md-2 col-form-label">
                            <h5>Role</h5></label>
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
                            {/*<form action="#/user/123456789123456789" onSubmit={this.checkUser} >*/}
                            <button type="button"
                                    onClick={this.checkUser}
                                className="btn btn-primary btn-block wbdv-button wbdv-login pd-0">
                                <h5>Sign in</h5>
                            </button>
                            {/*</form>*/}
                            <div className="form-row">
                                <div className="col-6">
                                    <a href="#/retrievePassword"
                                       className="wbdv-link wbdv-forgot-password">
                                        <h5>Forgot Password?</h5>
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="#/register"
                                       className="float-right wbdv-link wbdv-register">
                                        <h5>Sign up</h5>
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





// const stateToPropertyMapper = (state) =>{
//
//     return {
//         username:state.username,
//         password:state.password
//
//     }
// }
//
// const dispatchToPropertyMapper = (dispatch) => ({
//     // setOtherPencils: (curModuleId) => dispatch({
//     //                                                type: MODULE_SET_OTHER_PENCILS,
//     //                                                moduleId: curModuleId
//     //                                            }),
//     // clickPencil: (curModuleId) => dispatch({
//     //                                            type: MODULE_CLICK_PENCIL,
//     //                                            moduleId: curModuleId
//     //                                        }),
//     // setFontDefaultColor: (curModuleId) => dispatch({
//     //                                                    type: SET_MODULE_FONT_DEFAULT_COLOR,
//     //                                                    moduleId: curModuleId
//     //                                                }),
// });

// export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LoginComponent);

export default LoginComponent;
