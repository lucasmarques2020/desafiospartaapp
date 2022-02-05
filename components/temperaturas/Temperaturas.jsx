import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti'

export default function Temperaturas() {
    return (
        <View style={styles.Climas}>
            <ScrollView horizontal={true}>
               
                <View style={styles.ViewClimas}>
                    <Text style={styles.TextoClima}>Domingo</Text>
                    <Text style={styles.TextoClima}>fev 7</Text>
                    <MotiView
                        from={{
                            opacity: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: 'timing',
                            duration: 2000,
                            loop: true 
                        }}
                        style={styles.shape}
                    >
                        <Ionicons name="rainy" size={24} color="white" />
                    </MotiView>
                    <Text style={styles.TextoClima}>Chuvoso</Text>
                </View>
                <View style={styles.ViewClimas}>
                    <Text style={styles.TextoClima}>Domingo</Text>
                    <Text style={styles.TextoClima}>fev 7</Text>
                    <MotiView
                        from={{
                            opacity: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: 'timing',
                            duration: 2000,
                            loop: true 
                        }}
                        style={styles.shape}
                    >
                        <Ionicons name="rainy" size={24} color="white" />
                    </MotiView>
                    <Text style={styles.TextoClima}>Chuvoso</Text>
                </View>
                <View style={styles.ViewClimas}>
                    <Text style={styles.TextoClima}>Domingo</Text>
                    <Text style={styles.TextoClima}>fev 7</Text>
                    <MotiView
                        from={{
                            opacity: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: 'timing',
                            duration: 2000,
                            loop: true 
                        }}
                        style={styles.shape}
                    >
                        <Ionicons name="rainy" size={24} color="white" />
                    </MotiView>
                    <Text style={styles.TextoClima}>Chuvoso</Text>
                </View>
                <View style={styles.ViewClimas}>
                    <Text style={styles.TextoClima}>Domingo</Text>
                    <Text style={styles.TextoClima}>fev 7</Text>
                    <MotiView
                        from={{
                            opacity: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: 'timing',
                            duration: 2000,
                            loop: true 
                        }}
                        style={styles.shape}
                    >
                        <Ionicons name="rainy" size={24} color="white" />
                    </MotiView>
                    <Text style={styles.TextoClima}>Chuvoso</Text>
                </View>
                <View style={styles.ViewClimas}>
                    <Text style={styles.TextoClima}>Domingo</Text>
                    <Text style={styles.TextoClima}>fev 7</Text>
                    <MotiView
                        from={{
                            opacity: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: 'timing',
                            duration: 2000,
                            loop: true 
                        }}
                        style={styles.shape}
                    >
                        <Ionicons name="rainy" size={24} color="white" />
                    </MotiView>
                    <Text style={styles.TextoClima}>Chuvoso</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    Climas: {
        height: 120,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0
    },
    ViewClimas: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 100,
        marginRight: 10,
        backgroundColor: 'transparent'
    },
    TextoClima: {
        fontSize: 15,
        color: 'white'
    }
})
