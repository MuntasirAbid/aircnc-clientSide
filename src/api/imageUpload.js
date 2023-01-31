export const imageUpload = async image => {

    const formData = new FormData()
    formData.append('image', image)

    const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`

    const response = await fetch(uri, {
        method: 'POST',
        body: formData,
    })

    const data = await response.json()
    return data.data.display_url
}