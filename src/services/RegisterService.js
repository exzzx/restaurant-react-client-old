import {API_URL} from "../constants";

export const createUser = async (user) => {
    let rsp;
    let role = user.role;
    console.log(user);
    if(role === 'CUSTOMER_USER'){
        rsp = await fetch(`${API_URL}/api/customer/signUp`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    }
    else if(role === 'OWNER_USER'){
        rsp = await fetch(`${API_URL}/api/owner/signUp`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    } else if(role === 'DELIVERER_USER'){
        rsp = await fetch(`${API_URL}/api/deliverer/signUp`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });

    } else if(role === 'ADMIN_USER') {
        rsp = await fetch(`${API_URL}/api/admin/signUp`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    }

    return await rsp.json();
};
