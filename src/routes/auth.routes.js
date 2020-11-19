import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a',
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
