// Save a booking
export const saveBooking = async bookingData => {
    const url = `${process.env.REACT_APP_API_URL}/bookings`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    })

    const data = await response.json()

    return data
}

// Get All Bookings for user
export const getAllBookingsByEmail = async email => {
    const url = `${process.env.REACT_APP_API_URL}/bookings?email=${email}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}

// Get All Bookings for Admin
export const getAllBookings = async () => {
    const url = `${process.env.REACT_APP_API_URL}/bookings`

    const response = await fetch(url)

    const data = await response.json()

    return data
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