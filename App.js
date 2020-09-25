import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
export default class App extends Component {
  render() {
    const stack = createStackNavigator();
    return (
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          {/* Main Screen */}
          <stack.Screen name="home" component={Home} />
          {/*
          <stack.Screen name="QR" component={QR} />
          <stack.Screen
            name="DocumentConverter"
            component={DocumentConverter}
          />

          <stack.Screen name="ImageBrowser" component={ImageBrowser} />

          Qr Scanner
          <stack.Screen name="Scan" component={Scan} />
          <stack.Screen name="ShowText" component={ShowText} />
          <stack.Screen name="GetText" component={GetText} />
          <stack.Screen name="ShowQR" component={ShowQR} /> */}
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}
