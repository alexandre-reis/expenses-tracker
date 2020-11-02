import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import firebase from './src/services/firebase';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
    // <Container style={styles.container}>
    //   <Texto>teste</Texto>
    //   <Texto>teste2</Texto>
    //   <BotaoEntrar>
    //     <TextoBotao>Entrar</TextoBotao>
    //   </BotaoEntrar>
    //   <Feather name="gift" size={30} color="red" />
    // </Container>
  );
}

export default App;
