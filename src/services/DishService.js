import {API_URL} from '../constants';
import Restaurant from "../components/restaurant/Restaurant";


export const findDishesByRestaurant = async(restaurantId) => {
    console.log(restaurantId);
    const rsp = await fetch(`${API_URL}/api/restaurant/${restaurantId}/dishes`);
    return await rsp.json();
};

export const findDishByName = async(restaurantId, dishName)=>{
    const rsp = await fetch(`${API_URL}/api/restaurant/${restaurantId}/dishes/${dishName}`);
    return await rsp.json();

}

export const findDishById = async(restaurantId, dishId)=>{
    const rsp = await fetch(`${API_URL}/api/restaurant/${restaurantId}/dish/${dishId}`);
    return await rsp.json();

}

export const createDishForRestaurant = async(restaurantId, dish) =>{
    console.log("dish in service")

    console.log(dish)
    const rsp = await fetch(`${API_URL}/api/restaurant/${restaurantId}/dish`, {
        method:'POST',
        body:JSON.stringify(dish),
        headers:{
            'content-type':'application/json'
        }
    });
    return await rsp.json();
}
