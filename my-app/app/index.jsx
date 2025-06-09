
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native'
import icedCoffeeImg from "@/assets/images/coffee-iced.jpg"
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style= {styles.container} >
      <ImageBackground
      source={icedCoffeeImg}
      resizeMode="cover"
      style={styles.image}
      >
      <Text style={styles.title}> Coffee Wiki </Text>

  
      
      <Link href="/coffeHot" style ={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
      <Text style = {styles.buttonText}>Hot coffees</Text>
      </Pressable>
      </Link>
      
      <Link href="/coffeIced" style ={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
      <Text style = {styles.buttonText}>Iced coffees</Text>
      </Pressable>
      </Link>

      <Link href="/contact" style ={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
      <Text style = {styles.buttonText}>Contato</Text>
      </Pressable>
      </Link>

      </ImageBackground>
    </View>



  )
}
export default app


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column', 
  },
  title:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5),',
    marginBottom:120,
  },
  link:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5),',
    textDecorationLine: 'underline',
    padding: 4,
  },
  button:{
  height: 60,
  borderRadius: 20,
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.75)',
  padding: 6,
  marginTop: 4
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'semi-bold',
    textAlign: 'center',
    padding: 4,
  },
  image:{
    width:'100%',
    height:'100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'

  },
})