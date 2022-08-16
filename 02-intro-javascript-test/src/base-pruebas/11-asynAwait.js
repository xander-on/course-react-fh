export const getImage = async () => {

  try {

    const apiKey = 'xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK';
    const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await peticion.json();
    const { url } = data.images.original;
    return url;

  } catch (error) {
    console.warn(error);
    return 'No se encontro la imagen'
  }
}


