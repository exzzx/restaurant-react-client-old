import React from "react";
import {
    findRestaurantsByCity,
    findRestaurantsByCityLimit1
} from "../../services/RestaurantService";
import RestaurantDetailComponent from "./RestaurantDetailComponent";
import './Restaurant.css'
class RestaurantComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cityName:'',
            city:'',
            restaurants:[],
            curPage:0,
            maxPage:0,
        }
    }
    updateForm=(state)=>{
        this.setState(state)
    }
    findRestaurantsByCity=(city)=>{
        findRestaurantsByCityLimit1(city)
            .then(res=>{
                console.log(res);
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

    setMaxPage = (maxPage)=>{
        this.setState(
            ()=>{
                return({
                    ...this.state,
                    maxPage: maxPage >= this.state.maxPage?maxPage:this.state.maxPage,
                    // restaurants:[...res]
                })
            }
        )
    }

    render() {
        let cityName = this.state.cityName
        let curPage  = 0;
        let curPage2 = 0;
        let onePage = 0;
        const setMaxPage = ()=> this.setMaxPage;
        return (
            <div className="bg-light">

                <blockquote className="blockquote text-center">
                    <p className="mb-0"><h1>Look Up Restaurants</h1></p>
                    <footer className="blockquote-footer"><h3>Input Your City: </h3></footer>
                </blockquote>

                <div className="form-group">
                <input className="form-control" onChange={event => this.updateForm({
                                                              cityName: event.target.value
                                                          })}
                       type="text" name="city"/>

                <a className="d-flex justify-content-center" onClick={()=>this.findRestaurantsByCity(cityName)}
                    href={`#/restaurantLookup/${cityName}`}>

                    <button className="btn btn-primary">
                    get Restaurants
                    </button>

                </a>
                </div>
                <hr/>
                {this.state.city !== null && this.state.city.length > 0 &&
                 <blockquote className="blockquote text-center">
                 <h3>

                     Restaurants in {this.state.city}
                 </h3>
                 </blockquote>
                }

                <ul className="container-fluid">
                    <div className="row ">
                        <div className="card-columns">
                    {

                        this.state.restaurants.map(function (restaurant, index){

                            return(
                                        <div className="card m-auto p-0" >
                                            <img src={restaurant.photoLink} alt="restaurant photo" className='img-fluid h-100 w-100 max-width: 100%' />
                                            <div className="card-body p-3">
                                            <RestaurantDetailComponent
                                                restaurant={restaurant}
                                                curPage={curPage}
                                                cityName={cityName}
                                            />
                                            </div>
                                        </div>


                                  )

                            // onePage++;
                            // if(onePage === 9){
                            //     onePage = 0;
                            //     curPage++;
                            // }
                            // // console.log(onePage);
                            // // setMaxPage(curPage);
                            //
                            // return (
                            //     <div>
                            //     <li class="list-group-item">
                            //         <a href={`#/restaurantLookup/${cityName}/${restaurant.yelpId}/${curPage}`}>
                            //             {restaurant.name}
                            //         </a>
                            //     </li>
                            //
                            //     </div>
                            // )

                        })

                    }

                    {

                        // this.state.restaurants.map(function (restaurant, index) {
                        //     curPage2++;
                        //     return(
                        //     <nav aria-label="page">
                        //         <ul className="pagination">
                        //             {curPage2 !== 1 &&
                        //              <li className="page-item"><a className="page-link"
                        //                                           href={`#/restaurantLookup/${cityName}/${restaurant.yelpId}/${curPage2-1}`}>Previous</a>
                        //              </li>
                        //             }
                        //             {curPage2 !== curPage &&
                        //              <li className="page-item"><a className="page-link"
                        //                                           href={`#/restaurantLookup/${cityName}/${restaurant.yelpId}/${curPage2+1}`}>Next</a></li>
                        //             }
                        //         </ul>
                        //     </nav>
                        //     )
                        // })
                    }
                        </div>
                    </div>
                </ul>

            </div>
        )

    }
}


export default RestaurantComponent;
