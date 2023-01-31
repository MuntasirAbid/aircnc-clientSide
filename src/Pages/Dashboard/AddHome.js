import React, { useContext, useState } from 'react'
import AddServiceForm from '../../Components/Form/AddServiceForm'
import { imageUpload } from '../../api/imageUpload'
import { addHome } from '../../api/services'
import { AuthContext } from '../../contexts/AuthProvider'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddHome = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [arrivalDate, setArrivalDate] = useState(new Date())
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  )

  const handleSubmit = event => {
    event.preventDefault()
    const location = event.target.location.value
    const title = event.target.title.value
    const from = arrivalDate
    const to = departureDate
    const price = event.target.price.value
    const total_guest = event.target.total_guest.value
    const bedrooms = event.target.bedrooms.value
    const bathrooms = event.target.bathrooms.value
    const description = event.target.description.value
    const image = event.target.image.files[0]
    setLoading(true)
    imageUpload(image)
      .then(data => {
        const homeData = {
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        }

        addHome(homeData).then(data => {
          console.log(data)
          setLoading(false)
          toast.success("Home Added!")
          navigate('/dashboard/manage-homes')
        })
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
        Add Home
      </h1>
      <AddServiceForm
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        loading={loading}
      />
    </>
  )
}

export default AddHome