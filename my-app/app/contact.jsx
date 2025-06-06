import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import * as font from 'expo-font'


export default  function contact(){

  
  return (
    <View style={style.container}>
      <Text style={style.title}>Contato</Text>
      <Text style={style.about}>Não hesite em entrar em contato conosco para propor melhorias e dicas ao nosso site/estabelecimento</Text>

    


    </View>
  )
}

const style = StyleSheet.create({

container:{
  flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#D4F5D6'
},
title:{
  color: 'black',
  fontSize: 43,
  fontWeight: 'semi-bold',
  marginBottom:10,
  marginTop: 40,
  marginStart: 20, 
},

about:{
color:'grey',
marginStart: 20

},

blocks:{
  backgroundColor: 'black'
}

})