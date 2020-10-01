import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import GenerateButton from '../../component/GenerateButton';
import QRCode from 'react-native-qrcode-generator';
export default class ShowQR extends Component {
  render() {
    const {data} = this.props.route.params;
    // let logo = require('../../assets/camera.png');
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <QRCode
            size={310}
            backgroundColor="#000"
            color="#FFDE59"
            value={data}
            // logo={logo}
            logoSize={80}
            logoBorderRadius={40}
          /> */}
          <QRCode value={data} size={310} bgColor="black" fgColor="#FFDE59" />
        </View>
        {/* <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity style={styles.save}>
            <GenerateButton Text="Save" />
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: '10%',
    flex: 1,
    justifyContent: 'center',
    // alignItems: "center",
    backgroundColor: '#000',
    color: '#fff',
  },
  save: {
    // marginTop: 100,
  },
});
