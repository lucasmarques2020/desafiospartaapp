import axios from "axios"

export default async function getCurrentWeather(locationCoords){

    const lat = locationCoords.latitude
    
    const log = locationCoords.longitude

    let results = []

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=08bf4a8b9af4ebbdaa182231a25ea6a5`)
        .then(function (response){

            const data = response.data     
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const currentTemperature = data.main.temp
            
            results = [currentTemperature, locationName]
            
        })
        .catch(function (error) {
            console.log(error)
        })

    return results
  }