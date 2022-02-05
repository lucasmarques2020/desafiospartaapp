import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'


export default function BtnSearch({ navigation }) {
    return (
        <>
        <TouchableOpacity style={styles.TouchBtn} onPress={() => navigation.navigate("SearchWeather")}><Text>Localizar</Text><Image style={styles.ImageBtn}source={require('./../../assets/temperatura/address.png')} /></TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    TouchBtn: {
        position: 'absolute',
        zIndex: 1,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        right: 10,
        top: 40,
        width: 100,
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 30,
        shadowColor: '#ffffff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    ImageBtn:{
        width: 20,
        height: 20,
        marginLeft: 10
    }

})
