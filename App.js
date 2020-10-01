import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import QrHome from './screens/QrScanner/QrHome';
import Scan from './screens/QrScanner/Scan';
import GetText from './screens/QrScanner/GetText';
import ShowQR from './screens/QrScanner/ShowQR';
import ShowText from './screens/QrScanner/ShowText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends Component {
  render() {
    const stack = createStackNavigator();
    return (
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          {/* Main Screen */}
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="QR" component={QrHome} />
          <stack.Screen name="Scan" component={Scan} />
          <stack.Screen name="GetText" component={GetText} />
          <stack.Screen name="ShowQR" component={ShowQR} />
          <stack.Screen name="ShowText" component={ShowText} />
          {/*
          <stack.Screen
            name="DocumentConverter"
            component={DocumentConverter}
          />

          <stack.Screen name="ImageBrowser" component={ImageBrowser} />

          Qr Scanner*/}
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}
