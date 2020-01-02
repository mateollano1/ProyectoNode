const axios = require('axios')


 const getLugar = async (word) => {
    console.log("este es el lugar" + word);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${word}`,
        // timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'b970c346e5msh43e4523bc69d2cfp140bf7jsn738ceadc77c4' }
    });
    // const word = encodeURI(argv.direccion)


    const resp = await instance.get()
    return resp.data['Results'][0]
}

module.exports = {
    getLugar
}