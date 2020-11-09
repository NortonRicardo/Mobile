import React, { useState } from 'react'
import { Button, Text, SafeAreaView, View, StyleSheet} from 'react-native'


export default props => {
    const lado = 55
       return (
        <View style={
            {
                height: lado,
                width: lado,
                backgroundColor: props.cor || '#000'
            }
        }>

        </View>
       )
 } 
