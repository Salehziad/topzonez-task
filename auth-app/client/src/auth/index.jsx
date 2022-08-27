export const signup = async(user) => {
    return await fetch(`https://topzone-task.herokuapp.com/api/v1/users/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const signin = async(user) => {
    return await fetch(`https://topzone-task.herokuapp.com/api/v1/users/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}