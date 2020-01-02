const axios = require('axios')

const getClima = async (lat, lon) => {
    console.log(lat,lon);
    
    const clima = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=be8bfdbd4c58af9869dbc5e280d9f3c7`,
    })
    // console.log(clima);
    
    const respClima = await clima.get()
    return respClima.data
}

module.exports = {
    getClima
}
