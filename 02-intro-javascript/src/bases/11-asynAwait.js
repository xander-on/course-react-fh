const getImage = async () => {

  try {
    const apiKey = 'xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK';
    const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await peticion.json();
    console.log (data.images.original.url);
  } catch (error) {
    console.warn(error)
  }
}

getImage();





// const apiKey = 'xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK';
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
// .then( resp => resp.json() )
// .then( ({data}) => console.log(data.images.original.url) )
// .catch( console.warn );

