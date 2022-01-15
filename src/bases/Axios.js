import axios from 'axios'
const apiKey='gBTGfbg2qyGQDo1biCKPo14W4kEiuspE'

//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`,
    params: {
        apiKey: apiKey
    }
})

giphyApi.get('/random')
.then(resp => {
    const {data} = resp.data
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})

export default giphyApi