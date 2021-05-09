import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
class CustomerOrderComponent extends React.Component{

    state = {
        order:'',
        amount:0,
    }

    updateForm =(state)=>{
        this.setState(state);
    }

    render() {

        return (
            <div>
                Hello world
            </div>
        )
    }
}


export default CustomerOrderComponent;


