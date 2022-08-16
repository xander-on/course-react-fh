const apiKey = 'xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json() )
.then( ({data}) => console.log(data.images.original.url) )
.catch( console.warn );

