import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default props => {
       return (
           <View style={style.Botoes}>
            
            <Button  title="+" onPress={props.inc} style={{color: 'red', marginTop: 10, padding: 10}}>
            </Button>
            
            <Button  title="-" onPress={props.dec} style={[styles.buttonStyle]}>
            </Button>

           </View>
       )
 } 

 const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row",
        
    },
    
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    }
 })


 const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green' 
    }
});