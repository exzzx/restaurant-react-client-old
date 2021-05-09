import React from "react";

class RetrieveComponent extends React.Component{
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="form-row col-md-5">
                        <h1>Get Password Back</h1>
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
                                   id="usernameFld"
                                   placeholder="Alice"/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <label htmlFor="emailFld"
                           className="col-5 col-md-2 col-form-label">
                        <h5>Email</h5></label>
                    <div className="col-12 col-md-8 ml-auto">
                        <input type="email"
                               className="form-control wbdv-field wbdv-email"
                               id="emailFld"/>
                    </div>

                    <div className="form-group form-row">
                        <label className="col-md-3 col-form-label"></label>
                        <div className="col-12 col-md-8">
                            <button id="registerBtn"
                                    className="btn btn-primary btn-block wbdv-button wbdv-register">
                                <h5>Get Password</h5>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default RetrieveComponent;


