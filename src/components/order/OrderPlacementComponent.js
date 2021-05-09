import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import {findDishesByRestaurant} from "../../services/DishService";
class OrderPlacementComponent extends React.Component{

    state = {
        order: '',
        amount: 0,
        dishes:[],
    }

    componentDidMount() {
        findDishesByRestaurant(this.props.match.params.resId)
            .then(res=>
                      this.setState({
                                        ...this.state,
                                        dishes:res
                                    })
            );
    }

    updateForm =(state)=>{
        this.setState(state);
    }

    render() {
        const city = this.props.match.params.city;
        const resId = this.props.match.params.resId;
        return (
            <div className="bg-light">
                <blockquote className="blockquote text-center">
                    <p className="mb-0"><h1>Welcome to restaurant {this.props.match.params.resId} in {this.props.match.params.city}</h1></p>
                    <footer className="blockquote-footer"><h3>Place Your Order: </h3></footer>
                </blockquote>
                <form  style={{
                    height: '0.2rem',
                    display: 'inline',
                    position: 'relative'
                }}>
                    <ul className="container-fluid">
                        Click to order the item
                        <div className="row ">
                            <div className="card-columns">
                                { this.state.dishes
                                  && this.state.dishes.length > 0 &&
                                  this.state.dishes.map(function (dish, index) {

                                      return (
                                          <div className="card m-auto p-0" >
                                              <a href={`#/restaurantLookup/${city}/${resId}/${dish.id}`} className="card-body p-3">
                                                  <div>
                                                      Dish Name: {dish.name}
                                                  </div>
                                                  <div>
                                                      Dish Description: {dish.description}
                                                  </div>
                                                  <div>
                                                      Dish Price: {dish.price}
                                                  </div>
                                              </a>
                                          </div>
                                      )
                                  })

                                }
                            </div>
                        </div>
                    </ul>

                </form>
            </div>
        )
    }
}


export default OrderPlacementComponent;


