import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Index from './components/Index';
import Step1 from './components/Step1';

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Step1" component={Step1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
