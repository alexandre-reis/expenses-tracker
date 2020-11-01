import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

function App() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const te = [
      { id: 1, nome: 'Alexandre', idade: 30 },
      { id: 2, nome: 'Jose', idade: 45 },
      { id: 3, nome: 'Jennyfer', idade: 85 },
      { id: 4, nome: 'Pedro', idade: 12 },
    ];
    setFeed(te);
  }, []);

  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <Text>teste2</Text>
      <FontAwesome name="user" />
      <Feather name="gift" size={30} color="red" />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.texto}>Valor</Text>
        <TextInput style={styles.input} placeholder="Informe o valor" />
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    fontSize: 25,
  },
});

export default App;
