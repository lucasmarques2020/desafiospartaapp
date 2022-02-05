import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MotiView } from 'moti'
import LottieView from 'lottie-react-native'
import React, { useState, useRef, useEffect } from 'react'


export default function CardsWeather() {
    const [like, setLike] = useState(true)
    const animation = useRef(null)
    const run = useRef(true)

    useEffect(()=>{
        if(run.current){
            if(like){
                animation.current.play(35, 35)
            }  
            else{
                animation.current.play(37, 37)
            }
            run.current = false
        }else if(like){
            animation.current.play(37, 35)
        }else{
            animation.current.play(35, 37)
        }
        
    },[like])

    return (
        <MotiView style={styles.container}>
            <View style={styles.Cards}>
                <View style={styles.ViewTextTemp}>
                    <Text style={styles.TextTemp}>30°</Text>
                    <Text style={styles.TextTypeTemp}>Ensolarado</Text>
                    <Text style={styles.TextLocation}>Aracati - Ce</Text>
                </View>

                <LottieView style={{
                    flex: 1,
                    width: '100%',
                    position: 'absolute',
                    top: -80,
                    left: -80,
                    alignItems: 'center'
                }}
                    source={require("./../../assets/temperatura/sun.json")}
                    loop
                    autoPlay
                />
                <TouchableOpacity style={{
                        flex: 1,
                        width: 100,
                        height: 40,
                        position: 'absolute',
                        top: 0,
                        right: -20,
                        alignItems: 'center',
                        backgroundColor: 'transparent'
                    }} onPress={()=>setLike(!like)}>
                    <LottieView 
                    style={{   
                        height: 50,
                    }}
                        source={require("./../../assets/like/like.json")}
                        loop={false}
                        autoPlay={false}
                        resizeMode="cover"
                        ref={animation}
                    />
                </TouchableOpacity>
            </View>
        </MotiView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    Cards: {
        backgroundColor: '#66B2FF',
        overflow: 'hidden',
        width: 350,
        height: 150,
        borderRadius: 15
    },
    ViewTextTemp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        backgroundColor: 'transparent',
        width: '90%',
        height: '100%'
    },
    TextTemp: {
        fontSize: 30,
        color: 'white'
    },
    TextTypeTemp: {
        fontSize: 20,
        color: 'white'
    },
    TextLocation: {
        fontSize: 15,
        color: 'white'
    }
})
