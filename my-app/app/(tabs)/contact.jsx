import React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Card } from '@/components/ui/card';




export default function Contact() {
  const telefone = () => {
    Linking.openURL('tel:+5512431234');
  };

  const email = () => {
    Linking.openURL('mailto:lucashenrique74148@gmail.com');
  };

  const instagram = () => {
    Linking.openURL('https://www.instagram.com/seu_perfil');
  };

  const whatsapp = () => {
    Linking.openURL('https://wa.me/5512431234');
  };

  const facebook = () => {
    Linking.openURL('https://www.facebook.com/seu_perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.about}>
        Não hesite em entrar em contato conosco para propor melhorias e dicas ao nosso site/estabelecimento
      </Text>

      <HStack style={styles.teste} space="2xl" reversed={false}>
        <TouchableOpacity
          style={styles.iconBlock}
          onPress={telefone}
          activeOpacity={0.7}
        >
          <MaterialIcons name="phone" size={40} color="#4A90E2" />
          <Text style={styles.iconText}>Ligar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBlock}
          onPress={email}
          activeOpacity={0.7}
        >
          <MaterialIcons name="email" size={40} color="#4A90E2" />
          <Text style={styles.iconText}>E-mail</Text>
        </TouchableOpacity>
      </HStack>

      <Text style={styles.redesSociaisTexto}>Redes sociais</Text>

      <HStack space="lg" style={styles.socialContainer}>
        <Card style={styles.socialCard}>
          <TouchableOpacity onPress={instagram} activeOpacity={0.7}>
            <VStack alignItems="center">
              <FontAwesome name="instagram" size={40} color="#E1306C" />
              <Text style={styles.socialText}>Instagram</Text>
            </VStack>
          </TouchableOpacity>
        </Card>

        <Card style={styles.socialCard}>
          <TouchableOpacity onPress={whatsapp} activeOpacity={0.7}>
            <VStack alignItems="center">
              <FontAwesome name="whatsapp" size={40} color="#25D366" />
              <Text style={styles.socialText}>WhatsApp</Text>
            </VStack>
          </TouchableOpacity>
        </Card>

        <Card style={styles.socialCard}>
          <TouchableOpacity onPress={facebook} activeOpacity={0.7}>
            <VStack alignItems="center">
              <FontAwesome name="facebook" size={40} color="#3B5998" />
              <Text style={styles.socialText}>Facebook</Text>
            </VStack>
          </TouchableOpacity>
        </Card>
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#D4F5D6',
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 43,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    marginTop: 40,
    marginStart: 20,
  },
  about: {
    color: 'grey',
    marginStart: 20,
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  teste: {
    justifyContent: 'center',
    marginTop: 30,
  },
  iconBlock: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconText: {
    marginTop: 8,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  redesSociaisTexto: {
    fontSize: 18,
    color: 'black',
    marginStart: 20,
    marginTop: 40,
    fontFamily: 'Poppins-SemiBold',
  },
  socialContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  socialCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialText: {
    marginTop: 8,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
});