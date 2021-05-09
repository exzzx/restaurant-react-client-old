import {API_URL} from '../constants';
import Restaurant from "../components/restaurant/Restaurant";


export const findRestaurantsByCity = async(city) => {
    // const rsp = await fetch(`${API_URL}/api/businessSearch/${city}`);
    const rsp = await fetch(`${API_URL}/api/businessSearch/${city}`);
    return await rsp.json();

};

export const findRestaurantsByCityLimit1 = async(city) => {
    const rsp = await fetch(`${API_URL}/api/restaurant/${city}/10`);
    return await rsp.json();
};

export const createTest = async(ownerId) =>{
    let restaurant = new Restaurant(Math.round(1000*Math.random()),'AA','boly','bos','beef',123321,'1231231',null,'MA',12,4.0,111,1);
    // const rsp = await fetch(`${API_URL}/api/businessSearch/${city}`);
    console.log(restaurant);
    console.log(ownerId);
    const rsp = await fetch(`${API_URL}/api/restaurant/owner/${ownerId}`, {

        method:'POST',
        body:JSON.stringify(restaurant),
        headers:{
            'content-type':'application/json'
        }
    });
    return await rsp.json();
}

export const createRestaurants = async(restaurant, ownerId) =>{
    // const rsp = await fetch(`${API_URL}/api/businessSearch/${city}`);

    const rsp = await fetch(`${API_URL}/api/restaurant/info/update/${ownerId}`, {

        method:'PUT',
        body:JSON.stringify(restaurant),
        headers:{
            'content-type':'application/json'
        }
    });
    return await rsp.json();
}


