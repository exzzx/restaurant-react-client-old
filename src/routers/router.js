import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';
import LoginComponent from "../components/login/LoginComponent";
import RegisterComponent from "../components/register/RegisterComponent";
import UserComponent from "../components/user/UserComponent";
import RetrieveComponent from "../components/retrieve/RetrieveComponent";
import RestaurantComponent from "../components/restaurant/RestaurantComponent";
import OrderPlacementComponent from "../components/order/OrderPlacementComponent";
import RestaurantOwnerComponent from "../components/restaurant/RestaurantOwnerComponent";
import OneRestaurantOfOwnerComponent
    from "../components/restaurant/OneRestaurantOfOwnerComponent";
import OrderPlacementDetailComponent
    from "../components/order/OrderPlacementDetailComponent";

const ZZXRouter = ()=>(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={LoginComponent}/>
            <Route exact path='/login' component={LoginComponent}/>
            <Route exact path='/retrievePassword' component={RetrieveComponent}/>
            <Route exact path='/register' component={RegisterComponent}/>
            <Route exact path='/user/:userId' component={UserComponent}/>
            <Route exact path='/restaurantLookup' component={RestaurantComponent} />
            <Route exact path='/restaurantLookup/:city' component={RestaurantComponent} />
            <Route exact path='/restaurantLookup/:city/:resId' component={OrderPlacementComponent} />
            <Route exact path='/restaurantLookup/:city/:resId/:dishId' component={OrderPlacementDetailComponent} />
            <Route exact path='/owner/:ownerName/:ownerId' component={RestaurantOwnerComponent} />
            <Route exact path='/owner/:ownerId/restaurant/:resId/:name' component={OneRestaurantOfOwnerComponent} />

            {/*<Route exact path='/customer/:customerId' component={CourseEditorComponent}/>*/}

        </Switch>
    </HashRouter>
);

export default ZZXRouter;
