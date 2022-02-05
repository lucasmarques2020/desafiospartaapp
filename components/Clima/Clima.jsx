import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MotiView } from 'moti'

export default function Clima() {
    const [Temperatura, setTemperatura] = useState('28')
    const [Localizacao, setLocalizacao] = useState('Aracati - Ce')
    const [EstatoClima, setEstadoClima] = useState('Ensolarado')
    
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
