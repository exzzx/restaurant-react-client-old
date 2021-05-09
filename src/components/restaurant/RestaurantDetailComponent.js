import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Restaurant.css"

class RestaurantDetailComponent extends React.Component{
    render() {

        return (
            <div>
                <li class="list-group-item list-group-flush">
                    <a href={`#/restaurantLookup/${this.props.restaurant.city}/${this.props.restaurant.id}`}>
                        <h5 className="card-title">
                        {this.props.restaurant.name}
                        </h5>
                     </a>
                    <div>
                        Price: {this.props.restaurant.price}
                    </div>
                    <div>
                        Rating: {this.props.restaurant.rating}
                    </div>
                    <div>
                        Address: {this.props.restaurant.address}, {this.props.restaurant.city}, {this.props.restaurant.state}
                    </div>
                    <div>
                        Distance from here: {Math.round(this.props.restaurant.distance)} meter
                    </div>
                    <div>
                        Phone number: { this.props.restaurant.phone  !== null
                                        && this.props.restaurant.phone.length > 0 ?
                                        this.props.restaurant.phone:
                                        'currently unavailable'
                    }
                    </div>

                    <div>

                    </div>
                </li>

            </div>
        )

    }
}


export default RestaurantDetailComponent;
