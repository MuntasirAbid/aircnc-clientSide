export const saveBooking = bookingData => {
    // Post method fetch
    return fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
        body: JSON.stringify(bookingData),
    })
}

// Get All Bookings for user
export const getAllBookingsByEmail = async email => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bookings?email=${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
            },
        }
    )
    const bookings = await response.json()
    return bookings
}

// Get All Bookings for Admin
export const getAllBookings = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
    })
    const bookings = await response.json()
    return bookings
}

// Delete a booking
export const deleteBooking = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/booking/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
            },
        }
    )

    const data = await response.json()
    return data
}

// Create Payment Intent

export const getPaymentIntent = async (price) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/create-payment-intent`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
            },
            body: JSON.stringify({ price })
        }
    )

    const data = await response.json()
    return data
}