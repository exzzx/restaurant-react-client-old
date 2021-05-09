import {API_URL} from '../constants';

export const updateUser = async (user) => {
    console.log("user updated:")
    console.log(user)
    const rsp = await fetch(`${API_URL}/api/user/profile/update`, {
        method:'PUT',
        body:JSON.stringify(user),
        headers:{
            'content-type':'application/json'
        }
    });
    return await rsp.json();
};
