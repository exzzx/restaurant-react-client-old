import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import {findDishById, findDishesByRestaurant} from "../../services/DishService";
class OrderPlacementDetailComponent extends React.Component{

    state = {
        order: '',
        amount: 0,
        dish:null,

    }

    componentDidMount() {
        findDishById(this.props.match.params.resId)
            .then(res=>
                      this.setState({
                                        ...this.state,
                                        dish:res
                                    })
            );
    }

    addDish = (dishId) =>{
        console.log("ready to finish addDish")
    }

    updateForm =(state)=>{
        this.setState(state);
    }

    render() {
        const city = this.props.match.params.city;
        const resId = this.props.match.params.resId;
        const dishId = this.props.match.params.dishId;
        const dish = this.state.dish;
        return (
            <div className="bg-light">
                {/*<blockquote className="blockquote text-center">*/}
                {/*    <p className="mb-0"><h1>Welcome to restaurant {this.props.match.params.resId} in {this.props.match.params.city}</h1></p>*/}
                {/*    <footer className="blockquote-footer"><h3>Place Your Order: </h3></footer>*/}
                {/*</blockquote>*/}
                <form  style={{
                    height: '0.2rem',
                    display: 'inline',
                    position: 'relative'
                }}>
                    <ul className="container-fluid">
                        <div className="row  d-flex justify-content-center">
                            {/*<div className="card-columns">*/}
                                { this.state.dish && this.state.dish.length>0 &&
                                    <div>
                                        Dish Name: {dish.name}
                                    </div>

                                }
                                { this.state.dish && this.state.dish.length>0 &&
                                  <div>
                                      Dish Price: {dish.name}
                                  </div>
                                }
                                { this.state.dish && this.state.dish.length>0 &&
                                  <div>
                                      Dish Description: {dish.description}
                                  </div>

                                }
                            {/*</div>*/}
                        </div>
                    </ul>
                    <span className="input-group">
                 The amount you want to order:
                    <input type="text"
                           className="form-control form-control-sm form-inline "
                           onChange={
                               event =>
                                   this.updateForm({
                                                       amount: event.target.value
                                                   })
                           }
                           value={this.state.amount}
                           placeholder="Your amount"/>
                           <a className="d-flex justify-content-center" onClick={()=>this}

                              href={`#/restaurantLookup/${city}/${resId}`}>
                           <button onClick={()=>this.addDish(dishId)}>
                                    Add Dish
                           </button>
                           </a>
                </span>
                </form>
            </div>
        )
    }
}


export default OrderPlacementDetailComponent;


