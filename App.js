import { StatusBar } from 'expo-status-bar';
import { NavigationContainer , DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home/Home';
import Song from './Screen/Song/Song';
import Podcast from './Screen/Podcast/Podcast';
import Artists from './Screen/Artists/Artists';
import About from './Screen/About/About';
import Privecy from './Screen/Privecy/Privecy';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Song" component={Song}/>
        <Stack.Screen name='Podcast' component={Podcast}/>
        <Stack.Screen name='Artists' component={Artists}/>
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='Privecy' component={Privecy}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" />
    </>
  );
}

