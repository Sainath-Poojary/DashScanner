import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
export default class CameraButton extends Component {
  render() {
    var icon = this.props.add
      ? require('../assets/add.png')
      : require('../assets/camera.png');
    return (
      <View style={styles.container}>
        <View style={styles.Button}>
          <Image
            source={icon}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 37.5,
    width: 75,
    height: 75,
  },
  Button: {
    backgroundColor: '#424242',
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
