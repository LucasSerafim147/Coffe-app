
import { Colors } from "@/constants/Colors";
import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image} from "react-native";
import { useState, useEffect } from "react";
import { fetchData } from '../scripts/apiService.js';


export default function MenuScreen(){
const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
const [coffeeData, setCoffeeData] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
    fetchData('https://api.sampleapis.com/coffee/hot') 
      .then(data => {
        setCoffeeData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao carregar o menu:", error);
        setLoading(false);
      });
  }, []);



const styles =  CreateStyle(theme, colorScheme)


const Container = Platform.OS ==="web" ? ScrollView : SafeAreaView

const renderItem = ({ item }) => {
   
    const ingredientsText = Array.isArray(item.ingredients)
      ? item.ingredients.join(', ')
      : item.ingredients || 'Nenhum ingrediente disponível';

    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.ingredients}>
            Ingredientes: {ingredientsText}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Container>
      {loading ? (
        <View style={styles.loading}>
          <Text>Carregando menu...</Text>
        </View>
      ) : (
        <FlatList
          data={coffeeData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </Container>
  );
}
function CreateStyle(theme, colorScheme) {
  return StyleSheet.create({
    item: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      backgroundColor: theme.background,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
    },
    description: {
      fontSize: 14,
      color: 'white',
    },
    ingredients: {
      fontSize: 12,
      color: theme.tint,
    },
    list: {
      paddingBottom: 20,
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
  });
}