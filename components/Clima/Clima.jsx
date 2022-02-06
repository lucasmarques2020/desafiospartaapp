import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MotiView } from 'moti'
import * as Location from 'expo-location'
import getCurrentWeather from '../../api/SearchAPI'

export default function Clima() {
    const [Temperatura, setTemperatura] = useState('0')
    const [Localizacao, setLocalizacao] = useState('status: Atualizado')
    const [EstatoClima, setEstadoClima] = useState('Buscando...')
    const [locationCoords, setLocationCoords] = useState(null);

    async function getLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
          }else{
            let location = await Location.getCurrentPositionAsync({})
            await setLocationCoords(location.coords)
          }
      }

      async function setCurrentWeather(){
        await getLocation()
        const data = await getCurrentWeather(locationCoords)
    
        setTemperatura(convertKelvinToC(data[0]))
        setEstadoClima(data[1])
        
      }
      function convertKelvinToC(kelvin){
        return parseInt(kelvin - 273)
      }

      useEffect(() => {
        setCurrentWeather()
      }, [])
    return (
        <MotiView style={styles.container}>
            <View tyle={styles.styleTextoTemperatura}>
                <Text style={styles.styleTextoTemperatura}>{Temperatura}°</Text>
                <Text style={styles.styleTextoClima}>{EstatoClima}</Text>
                <Text style={styles.styleTextoLocalizacao}>{Localizacao}</Text>
            </View>
        </MotiView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleTextoTemperatura: {
        position: 'absolute',
        fontSize: 60,
        color: 'white',
        top: 350,
        left: -155
    },
    styleTextoClima: {
        position: 'absolute',
        fontSize: 25,
        color: 'white',
        top: 420,
        left: -150
    },
    styleTextoLocalizacao: {
        position: 'absolute',
        fontSize: 15,
        color: 'white',
        top: 450,
        left: -150
    }
})
