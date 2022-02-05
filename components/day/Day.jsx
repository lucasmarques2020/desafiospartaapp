import { StyleSheet, View } from 'react-native'
import { MotiView } from 'moti'
import LottieView from 'lottie-react-native'
import Clima from './../Clima/Clima'
import BtnSearch from './../btnsearch/BtnSearch'
import Temperaturas from './../temperaturas/Temperaturas'


export default function Day({ navigation }) {
    return (
        <MotiView style={styles.container}>
            <BtnSearch navigation={navigation}/>
            <MotiView
                from={{
                    translateY: -40,
                }}
                animate={{
                    translateY: 0,
                }}
                transition={{
                    loop: true,
                    type: 'timing',
                    duration: 2800,
                    delay: 100,
                }}
                style={styles.nuvens}
            />
            <MotiView
                from={{
                    translateY: -35,
                }}
                animate={{
                    translateY: 0,
                }}
                transition={{
                    loop: true,
                    type: 'timing',
                    duration: 2500,
                    delay: 100,
                }}
                style={styles.nuvens2}
            />
            <MotiView
                from={{
                    translateY: -25,
                }}
                animate={{
                    translateY: 0,
                }}
                transition={{
                    loop: true,
                    type: 'timing',
                    duration: 2500,
                    delay: 100,
                }}
                style={styles.nuvens3}
            />
            <MotiView
                from={{
                    translateY: -25,
                }}
                animate={{
                    translateY: 0,
                }}
                transition={{
                    loop: true,
                    type: 'timing',
                    duration: 2500,
                    delay: 100,
                }}
                style={styles.nuvens4}
            />
            <MotiView
                from={{
                    translateY: -80,
                }}
                animate={{
                    translateY: 0,
                }}
                transition={{
                    loop: true,
                    type: 'timing',
                    duration: 2500,
                    delay: 100,
                }}
                style={styles.nuvens5}
            />

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <LottieView style={{
                    flex: 1,
                    width: '80%',
                    position: 'absolute',
                    top: 30,
                    left: -20,
                    alignItems: 'center'
                }}
                    source={require("./../../assets/temperatura/sun.json")}
                    loop
                    autoPlay
                />
            </View>
            <View>
                <Clima />
            </View>
            <Temperaturas />
        </MotiView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66B2FF'
    },
    nuvens: {
        position: 'absolute',
        top: -50,
        left: -100,
        borderRadius: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 300,
        height: 300
    },
    nuvens2: {
        position: 'absolute',
        top: -50,
        right: 100,
        borderRadius: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 400,
        height: 350
    },
    nuvens3: {
        position: 'absolute',
        top: -100,
        right: -50,
        borderRadius: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 400,
        height: 350
    },
    nuvens4: {
        position: 'absolute',
        top: -100,
        right: -50,
        borderRadius: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 300,
        height: 300
    },
    nuvens5: {
        position: 'absolute',
        top: -100,
        right: 20,
        borderRadius: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 500,
        height: 350
    }
})
