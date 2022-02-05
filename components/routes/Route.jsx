import React, {useEffect, useState} from 'react'

import { createStackNavigator } from '@react-navigation/stack'

//telas
import Day from './../day/Day'
import Night from './../night/Night'
import Rain from './../rain/Rain'
import SearchWeather from './../searchWeather/SearchWeather'
import Search from './../search/Search'

const Stack = createStackNavigator()

export default function Rota(){
   
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Day} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="SearchWeather" component={SearchWeather} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="Search" component={Search} options={{ title: '', headerTransparent: true }} />
        </Stack.Navigator>

    )
}