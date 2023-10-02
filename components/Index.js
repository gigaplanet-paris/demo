import { ImageBackground, Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './AssetExample';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image} >
              <Text style={styles.paragraph}> Demo </Text>
              <AssetExample />
      </ImageBackground>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'blue'
  },
});
