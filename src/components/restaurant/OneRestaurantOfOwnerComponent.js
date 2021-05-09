import React from "react";
import {connect} from "react-redux";
import '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dish from "../dish/Dish";
import {
    createDishForRestaurant,
    findDishesByRestaurant
} from "../../services/DishService";
class OneRestaurantOfOwnerComponent extends React.Component{

    state = {
        name: '',
        dishes:[],
        price:null,
        description:'',
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
    createDish=(resId)=>{
        let dish = new Dish(
            this.state.name,
            this.state.description,
            this.state.price
        )
        createDishForRestaurant( resId, dish)
            .then(res=>{
                // this.setState({
                //                   ...this.state,
                //                   dishes:res
                //               })
                findDishesByRestaurant(resId)
                    .then(res=>
                              this.setState({
                                                ...this.state,
                                                dishes:res
                                            })
                    );
            });

    }
    render() {
        let ownerId = this.props.match.params.ownerId;
        let resId = this.props.match.params.resId;
        let name = this.props.match.params.name;
        return (
            <div className="bg-light">

                <blockquote className="blockquote text-center">
                    <p className="mb-0"><h1>Hello, owner. Create dishes for restaurant {name}</h1></p>
                    <footer className="blockquote-footer"><h3>Create New Dishes: </h3></footer>
                </blockquote>
                <form  style={{
                    height: '0.2rem',
                    display: 'inline',
                    position: 'relative'
                }}>
                    <span className="input-group">
                 The dish you want to create:
                    <input type="text"
                           className="form-control form-control-sm form-inline "
                           onChange={
                               event =>
                                   this.updateForm({
                                                       name: event.target.value
                                                   })
                           }
                           value={this.state.name}
                           placeholder="Your dish"/>
                 The description of the dish:
                    <input type="text"
                           className="form-control form-control-sm form-inline "
                           onChange={
                               event =>
                                   this.updateForm({
                                                       description: event.target.value
                                                   })
                           }
                           value={this.state.description}
                           placeholder="Your description"/>
                  The price of the dish:
                     <input type="text"
                            className="form-control form-control-sm form-inline "
                            onChange={
                                event => {
                                    if( (event.target.value >='0' && event.target.value <='9') || event.target.value ==='\\.'
                                        || event.target.value === '') {
                                        this.updateForm({
                                                            price: event.target.value
                                                        })
                                    }
                                }
                            }
                            value={this.state.price}
                            placeholder="Your price"/>

                           <a className="d-flex justify-content-center" onClick={()=>this.createDish(resId)}
                              href={`#/owner/${ownerId}/restaurant/${resId}/${name}`}>
                           <button>
                                    Create Dish
                           </button>
                           </a>
                </span>
                </form>

                <ul className="container-fluid">
                    <div className="row ">
                        <div className="card-columns">
                            { this.state.dishes
                              && this.state.dishes.length > 0 &&
                                this.state.dishes.map(function (dish, index) {

                                    return (
                                        <div className="card m-auto p-0" >
                                            <div className="card-body p-3">
                                                <div>
                                                    Dish Name: {dish.name}
                                                </div>
                                                <div>
                                                    Dish Description: {dish.description}
                                                </div>
                                                <div>
                                                    Dish Price: {dish.price}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}


export default OneRestaurantOfOwnerComponent;


