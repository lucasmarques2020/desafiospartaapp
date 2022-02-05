import { StyleSheet, View, SafeAreaView } from 'react-native'

import Rotas from './components/routes/Route'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', width: '100%' }}>

      <View style={styles.container}>
      <NavigationContainer>
        <Rotas/>
      </NavigationContainer>
        {/* <Rotas/> */}
        {/* <SearchWeather/> */}
        {/* <Rain/> */}
        {/* <Night/> */}
        {/* <Day /> */}
        {/* <Temperaturas /> */}
        {/* <BtnSearch /> */}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
