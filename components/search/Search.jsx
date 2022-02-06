import { StyleSheet, Text, View, TextInput } from 'react-native'
import { MotiView } from 'moti'

export default function Search() {
    return (
        <MotiView style={styles.container}>
            <View style={styles.ViewInput}>
                <TextInput
                    placeholder='Inserir o nome da cidade'
                    placeholderTextColor="#C0C0C0"
                    style={{
                        color: '#C0C0C0',
                        paddingLeft: 50,
                        height: 50,
                        fontSize: 20,
                        borderBottomWidth: 1,
                        borderWidth: 10,
                        borderBottomColor: '#C0C0C0',
                        marginBottom: 30
                    }}
                />
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
    ViewInput: {
        position: 'absolute',
        width: '100%',
        top: 28

    }
})
