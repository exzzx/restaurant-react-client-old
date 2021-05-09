import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Restaurant.css"
import {
    createRestaurants,
    createTest,
    findRestaurantsByCity, findRestaurantsByCityLimit1
} from "../../services/RestaurantService";

class RestaurantOwnerComponent extends React.Component{
    state = {
        order: '',
        amount: 0,
        dishes:[],
        cityName:'',

    }

    updateForm =(state)=>{
        this.setState(state);
    }

    findRestaurantsByCity=(city)=>{
        findRestaurantsByCityLimit1(city)
            .then(res=>{
                this.setState(
                    ()=>{
                        return({
                            ...this.state,
                            cityName: '',
                            city:city,
                            restaurants:res
                        })
                    }
                )
            });
    }

    render() {
        let cityName = this.state.cityName;
        let ownerName = this.props.match.params.ownerName;
        let ownerId = this.props.match.params.ownerId;
        return (
            <div className="bg-light">
                <blockquote className="blockquote text-center">
                    <p className="mb-0"><h1> Hello, restaurant owner: {this.props.match.params.ownerName}</h1></p>
                    <footer className="blockquote-footer">
                        <h3>Please input your restaurants' city:
                        (Currently assume the owner owns all restaurants in the city)
                        </h3>
                    </footer>
                </blockquote>
                <div className="form-group">
                    <input className="form-control" onChange={event => this.updateForm({
                                                                                           cityName: event.target.value
                                                                                       })}
                           type="text" name="city"/>

                    <a className="d-flex justify-content-center" onClick={()=>this.findRestaurantsByCity(cityName)}
                       href={`#/owner/${ownerName}/${ownerId}`}>

                        <button className="btn btn-primary">
                            Get Your Restaurants
                            (in fact, here we get restaurants by city and assign them to the owner)
                        </button>

                    </a>
                </div>
                <ul className="list-group">
                    Your restaurants:
                    {
                        this.state.restaurants
                        && this.state.restaurants !== null
                        && this.state.restaurants.length > 0
                        &&
                        this.state.restaurants.map(function (restaurant, index) {
                            console.log(restaurant);
                            // if(restaurant.ownerId)
                            createRestaurants(restaurant,ownerId)
                                .then(res=>{console.log("res from creation");console.log(res);});
                            return (
                                <div>
                                    <li className="list-group-item">
                                        <a href={`#/owner/${ownerId}/restaurant/${restaurant.id}/${restaurant.name}`}>
                                            <h5>
                                                {restaurant.name}
                                            </h5>
                                        </a>
                                    </li>
                                </div>
                            )
                        })

                    }
                
                </ul>
            </div>
        )

    }
}


export default RestaurantOwnerComponent;
