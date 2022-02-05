import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MotiView } from 'moti'
import { Ionicons } from '@expo/vector-icons'
import CardsWeather from './../cards/CardsWeather'

export default function SearchWeather({ navigation }) {
    return (
        <MotiView style={styles.container}>
            <View style={styles.ViewVoltar}>

                <TouchableOpacity style={styles.BtnVoltar}>
                    <Ionicons name="arrow-back" size={24} color="white" /><Text
                        style={{ color: 'white', marginLeft: 20, fontSize: 20 }}>Selecionar cidade
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.ViewCards}>
                {/* lista que será gerada das cidades */}
                <CardsWeather />
            </View>
            <View style={styles.ViewAdd}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                    style={styles.BtnAdd}
                ><Text style={{ fontSize: 35 }}>+</Text></TouchableOpacity>
            </View>
        </MotiView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    ViewVoltar: {
        flex: 1,
        width: '100%',
        padding: 20,
        marginTop: 30
    },
    BtnVoltar: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: 300,
    },
    ViewAdd: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    BtnAdd: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewCards: {
        position: 'absolute',
        top: 100
    }
})
