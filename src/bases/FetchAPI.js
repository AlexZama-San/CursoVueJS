const apiKey='gBTGfbg2qyGQDo1biCKPo14W4kEiuspE'


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp => resp.json())
.then( ({data}) =>{
    const {url} = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(`fallo la conexion`)