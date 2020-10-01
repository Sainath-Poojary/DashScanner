import React from 'react';
import {
  Linking,
  Text,
  TouchableOpacity,
  Alert,
  View,
  StyleSheet,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import GenerateButton from '../../component/GenerateButton';
export default class QrScanner extends React.Component {
  ifScanned = (e) => {
    // Linking.openURL(e.data).catch((err) =>
    // Alert.alert(e.data),
    let data = e.data;
    this.props.navigation.navigate('ShowText', {data});
    // );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Qr Scanner</Text>
        <QRCodeScanner
          containerStyle={styles.scanner}
          onRead={this.ifScanned}
          reactivate={true}
          permissionDialogMessage="Need Permission to Access Camera"
          reactivateTimeout={10}
          showMarker={true}
          markerStyle={{borderColor: '#FFDE59', borderRadius: 10}}
          cameraProps={{ratio: '4:3'}}
          // bottomContent={}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('GetText')}>
          <GenerateButton Text="Generate" />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginBottom: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    color: '#E9EAEE',
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginTop: '10%',
  },
  scanner: {
    backgroundColor: '#000',
  },
  // centerText: {
  //   flex: 1,
  //   fontSize: 18,
  //   padding: 32,
  //   color: '#777',
  // },
  // textBold: {
  //   fontWeight: '500',
  //   color: '#000',
  // },
  // buttonText: {
  //   fontSize: 21,
  //   color: 'rgb(0,122,255)',
  // },
  // buttonTouchable: {
  //   padding: 16,
  // },
});
