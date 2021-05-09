import {API_URL} from '../constants';



export const findUser = async(user) => {
    let rsp;
    let role = user.role;
    if(role === 'CUSTOMER_USER'){
        rsp = await fetch(`${API_URL}/api/customer/login`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    }
    else if(role === 'OWNER_USER'){
        rsp = await fetch(`${API_URL}/api/owner/logIn`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    } else if(role === 'DELIVERER_USER'){
        rsp = await fetch(`${API_URL}/api/deliverer/logIn`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });

    } else if(role === 'ADMIN_USER') {
        rsp = await fetch(`${API_URL}/api/admin/logIn`, {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        });
    }

    console.log(rsp);
    console.log(role);

    return await rsp.json();
};

export const findUserById = async(id) => {
    const rsp = await fetch(`${API_URL}/api/user/${id}`);
    return await rsp.json();
};
