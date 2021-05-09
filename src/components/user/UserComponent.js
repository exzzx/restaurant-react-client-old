

import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profile.style.client.css"
import {findUserById, findUserByUsername} from "../../services/LoginService";
import {updateUser} from "../../services/UserService";
import User from "./User";

class UserComponent extends React.Component{

//     funCloseSuccessAlert =()=>{
//         $(".alert").hide();
//     };
//     funCloseSuccessAlert();
//     // when click the Update button, alert will show.
//
//     $('#Update').click(()=>{
//     $('.alert.alert-success.alert-dismissible').show()
//     setTimeout(funCloseSuccessAlert, 2500)
// })
// $('.alert.alert-success.alert-dismissible').on('click', funCloseSuccessAlert);
// });


    constructor(props){
        super(props);
        this.state={
            id:'',
            username:'',
            password:'',
            userType:'',
            phone:'',
            email:'',
            dateOfBirth:'',
            description:'',
            photoURL:'',
            updateSucceed:false
        }
    }

    updateForm=(newState)=>{
        this.setState(newState);
    }

    // userTypeChange =(event) =>{
    //     this.setState({
    //         ...this.state,
    //         userType:event.target.value
    //                   })
    // }
    updateUser = () =>{
        const user = new User(
            this.props.match.params.userId,
            this.state.username,
            this.state.password,
            null,
            null,
            this.state.email,
            this.state.phone,
            null,
            this.state.dateOfBirth,
            this.state.photoURL,
            this.state.userType,

            )
        updateUser(user)
            .then(rsp=>this.setState({
                 updateSucceed:(rsp === 1),
                                     }));

    }

    hideNote=(event)=>{
        console.log("in hidenote event");
        console.log(event);

    }

    componentDidMount() {
        findUserById(this.props.match.params.userId)
            .then(user=>{
                this.setState({
                                  id:user.id,
                                  username:user.username,
                                  password:user.password,
                                  userType:user.userType,
                                  phone:user.phone,
                                  email:user.email,
                                  dateOfBirth:user.dateOfBirth,
                                  description:user.description,
                                  photoURL:user.photoURL
                              })
                // console.log("user: ");
                // console.log(user)
                // console.log(this.props.match.params.userId)
            });
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="form-row col-md-5">
                        <h1>User Profile</h1>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <form>
                    <div className="form-group form-row">
                        <div className="col-md-1"></div>
                        <div
                            className="alert alert-success alert-dismissible col-12 col-md-10 ml-auto"
                            aria-hidden={this.state.updateSucceed !== true}
                            onChange={this.hideNote}
                            userType="alert">
                            <button type="button" className="close" aria-hidden="true">
                                x
                            </button>
                            <div className="col-12 ml-auto">
                                <span className="alert-message-font">Profile successfully saved!</span>
                            </div>

                        </div>
                        <div className="col-md-1"></div>

                    </div>

                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="usernameFld"
                               className="col-5 col-md-2 col-form-label">
                            <h5> Username </h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input
                                className="form-control wbdv-field wbdv-username d-flex align-content-start flex-wrap"
                                id="usernameFld"
                                readOnly
                                value={this.state.username}/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="phoneFld"
                               className="col-5 col-md-2 col-form-label">
                            <h5>Phone</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input className="form-control wbdv-field wbdv-phone"
                                   onChange={
                                       event =>
                                       {this.updateForm({
                                                            ...this.state,
                                                            phone: event.target.value
                                                        }); }
                                   }
                                   value={this.state.phone}
                                   id="phoneFld" placeholder={this.state.phone}/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="emailFld"
                               className="col-5 col-md-2 col-form-label">
                            <h5>Email</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input type="email"
                                   className="form-control wbdv-field wbdv-email"
                                   onChange={
                                       event =>
                                       {this.updateForm({
                                                            ...this.state,
                                                            email: event.target.value
                                                        }); }
                                   }
                                   value={this.state.email}
                                   id="emailFld" placeholder={this.state.email}/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="userTypeFld"
                               className="col-5 col-md-2 col-form-label">
                            <h5>Role</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <select
                                disabled
                                value={this.state.userType}
                                className="custom-select wbdv-field wbdv-userType"
                                onChange={
                                    event =>
                                    {this.updateForm({
                                                         ...this.state,
                                                         userType: event.target.value
                                                     }); }
                                }
                                    id="userTypeFld">
                                <option value="CUSTOMER_USER">Customer</option>
                                <option value="OWNER_USER">Restaurant</option>
                                <option value="DELIVERER_USER">Deliverer</option>
                                <option value="ADMIN_USER">Admin</option>
                            </select>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="form-group form-row justify-content-md-center">
                        <div className="col-md-1"></div>
                        <label htmlFor="dobFld" className="col-5 col-md-2 col-form-label">
                            <h5>Date of Birth</h5></label>
                        <div className="col-12 col-md-8 ml-auto">
                            <input type="date"
                                   onChange={
                                       event =>
                                       {this.updateForm({
                                                            ...this.state,
                                                            dateOfBirth: event.target.value
                                                        }); }
                                   }
                                   value={this.state.dateOfBirth}
                                   className="form-control wbdv-field wbdv-dob"
                                   id="dobFld" placeholder={this.state.dateOfBirth}/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="form-group form-row ">
                        <label className="col-md-3 col-form-label"></label>
                        <div className="col-12 col-md-8">
                            <button id="Update"
                                    onClick={this.updateUser}
                                    className="btn btn-primary btn-block wbdv-button wbdv-update"
                                    data-dismiss="alert" aria-label="Close">
                                <h5>Update</h5>
                            </button>
                        </div>
                    </div>
                    {
                        this.state.userType === 'OWNER_USER' &&
                        <div>
                        <form action={`#/owner/${this.state.username}/${this.state.id}`}>
                            <div className="form-group form-row">
                                <label className="col-md-3 col-form-label"></label>
                                {/*<label htmlFor="dobFld" className="col-5 col-md-2 col-form-label">*/}
                                {/*    <h5>Date of Birth</h5></label>*/}
                                <div className="col-12 col-md-8">
                                    {/*<a href=>*/}
                                       <button className='btn btn-primary btn-block wbdv-button'>
                                           Arrange Dishes
                                       </button>
                                    {/*</a>*/}
                                </div>
                            </div>
                        </form>
                        </div>
                    }
                    {
                        this.state.userType === 'CUSTOMER_USER' &&
                        <div>
                        <form action={`#/restaurantLookup`}>
                        <div className="form-group form-row">
                        <label className="col-md-3 col-form-label"></label>
                        <div className="col-12 col-md-8">
                        {/*<a href=>*/}
                        <button className='btn btn-primary btn-block wbdv-button'>
                        Search Restaurants and Order Dishes
                        </button>
                        </div>
                        </div>
                        </form>
                        </div>
                    }

                </form>

                <form action="../../webapp/index.html">
                    <div className="form-group form-row">
                        <label className="col-md-3 col-form-label"></label>
                        <div className="col-12 col-md-8">
                            <button id="Logout"
                                    className="btn btn-primary btn-block wbdv-button wbdv-logout">
                                <h5>Logout</h5>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}



// export const user =






export default UserComponent;


