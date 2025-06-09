import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors'; 


export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
        <Stack screenOptions={{headerStyle: {backgroundColor: theme.headerBackground}, headerTintColor: theme.text, headerShadowVisible: false}}>
          
           {<Stack.Screen name= "index" options={{title: "Home", headerShown: false}} /> }
          <Stack.Screen name= "contact" options={{title: "Entre em contato", headerShown: true}} /> 
          <Stack.Screen name= "coffeHot" options={{title: "coffeHot", headerTitle: "Hot Coffe",headerShown: true}} /> 
          <Stack.Screen name= "coffeIced" options={{title: "coffeIced", headerTitle: "Iced Coffe",headerShown: true}} /> 
          <Stack.Screen name="+not-found" options={{headerShown: false}} />
        </Stack>
        <StatusBar style="auto" />
      </GluestackUIProvider>
  );
}
