import { StyleSheet, Text, View } from 'react-native'
import { MotiView } from 'moti'
import LottieView from 'lottie-react-native'
import Clima from './../Clima/Clima'
import BtnSearch from './../btnsearch/BtnSearch'

export default function Night({navigation}) {
    return (
        <MotiView style={styles.container}>
            <BtnSearch navigation={navigation} 
            style={{ backgroundColor: 'white'}}/>
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <LottieView style={{
                    flex: 1,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    alignItems: 'center'
                }}
                    source={require("./../../assets/temperatura/moon.json")}
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
        backgroundColor: 'rgba(31, 19, 42, 1)'
    },
})
