import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const AssetExample  = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Coucou Emmanuel
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Step1') } >
          <Image style={styles.logo} source={require('../assets/sourire.gif')} />
          <Text style={{ alignItems: 'center'}}>Clique sur moi</Text>
      </TouchableOpacity>
      
    </View>
  );
}

export default AssetExample;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  }
});
