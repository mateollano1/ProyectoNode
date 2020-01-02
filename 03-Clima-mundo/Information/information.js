const {getClima} = require("../clima/clima")
const {getLugar} = require("../lugar/lugar")


const getInfo = async (city) =>{
    try {
        const place = await getLugar(city)
        // console.log(place.Resultsdata);
        const clima = await getClima(place.lat,place.lon)
        return clima.main.temp
        
    } catch (error) {
        
    }
}

module.exports = {
    getInfo
}