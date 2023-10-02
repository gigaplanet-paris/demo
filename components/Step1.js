import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default Step1 = ({ navigation }) => {


  const [choix, setChoix] = useState(null);

  function choisir(safidy){
    setChoix(safidy);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image} >
      {choix == null &&
        <Text style={styles.paragraph}>
          Es-tu :
        </Text>
      }
      {choix == null &&
        <View style={styles.choix}>
          <View style={styles.column}>
              <TouchableOpacity onPress={() => choisir('salé') } >
                 <Text style={{ alignItems: 'center'}}>Salé</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.column}>
              <TouchableOpacity onPress={() => choisir('sucré') } >
                  <Text style={{ alignItems: 'center'}}>Sucré</Text>
              </TouchableOpacity>
          </View>
          
        </View>
      }
      {choix == "salé" &&
        <View style={{ flex:2, justifyContent: 'center', marginTop:50 }}>
            <Image style={{ borderRadius:10, width:'90%', height:300, marginLeft:'auto', marginRight:'auto', }} source={require('../assets/tacos.jpg')} />
            <Text style={{ alignItems: 'center', textAlign: 'center'}}>un bon TACOS pour toi ;) </Text>
            <TouchableOpacity onPress={() => choisir(null) } >
                 <Text style={{ alignItems: 'center', textAlign: 'center', marginTop:50}}>Retour</Text>
              </TouchableOpacity>
        </View>
      }
      {choix == "sucré" &&
        <View style={{ flex:2, justifyContent: 'center', marginTop:50 }}>
          <Image style={{ borderRadius:10, width:'90%', height:300, marginLeft:'auto', marginRight:'auto', }} source={require('../assets/gateaux.jpg')} />
          <Text style={{ alignItems: 'center', textAlign: 'center'}}>un délicieux GATEAU AU CHOCOLAT pour toi ;</Text>
          <TouchableOpacity onPress={() => choisir(null) } >
              <Text style={{ alignItems: 'center', textAlign: 'center', marginTop:50}}>Retour</Text>
              </TouchableOpacity>
        </View>
      }
      </ImageBackground>
    </View>
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
    marginTop: 100,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  column: {
    flexBasis: '40%',
    borderWidth: 1,
    height: 40,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: 'lightblue',
    borderColor: 'gray',
    alignItems: 'center',
    borderRadius : 10,
  },
  choix: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    height:100,
  },
});
