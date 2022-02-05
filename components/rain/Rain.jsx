import { StyleSheet, Text, View } from 'react-native'
import { MotiView } from 'moti'
import LottieView from 'lottie-react-native'
import Clima from './../Clima/Clima'
import BtnSearch from './../btnsearch/BtnSearch'

export default function Rain() {
    return (
        <MotiView style={styles.container}>
            <BtnSearch style={{ backgroundColor: 'white'}}/>
            <View style={{
                flex: 1,
                width: 600,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0

            }}>
                <LottieView style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center'
                }}
                    source={require("./../../assets/temperatura/rain.json")}
                    loop
                    autoPlay
                />
            </View>
            <View>
                <Clima />
            </View>

        </MotiView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(31, 30, 42, 1)'
    },
})
