export const hostRequest = async hostData => {

    const uri = `${process.env.REACT_APP_API_URL}/user/${hostData?.email}`

    const response = await fetch(uri, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('aircnc-token')}`
        },
        body: JSON.stringify(hostData),
    })
    const data = await response.json()
    return data
}

// Get user role
export const getRole = async email => {
    const uri = `${process.env.REACT_APP_API_URL}/user/${email}`
    const response = await fetch(uri,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
            },
        }
    )
    const user = await response.json()

    return user?.role
}

//get all users
export const getAllUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
            },
        }
    )
    console.log('test')
    const users = await response.json()

    return users
}

//Make host
export const makeHost = async user => {
    delete user._id
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
        body: JSON.stringify({ ...user, role: 'host' }),
    }
    )
    const users = await response.json()

    return users
}