import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import CameraPermission from './components/CameraPermission';
import IconButton from '../../components/IconButton';
import Icon from '@react-native-vector-icons/fontawesome6';

function CameraScreen() {
  const [cameraPosition, setCameraPosition] = useState<'back' | 'front'>(
    'back',
  );
  const device = useCameraDevice(cameraPosition);
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) {
    return <CameraPermission />;
  }
  if (device == null) {
    return <Text> no camera </Text>;
  }
  return (
    <>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <View style={{position: 'absolute', bottom: 50, right: 20}}>
        <IconButton
          size={60}
          backgroundColor={'black'}
          onPress={() =>
            setCameraPosition(prev => (prev === 'back' ? 'front' : 'back'))
          }>
          <Icon iconStyle="solid" name="camera-rotate" size={20} color={'white'} />
        </IconButton>
      </View>
    </>
  );
}

export default CameraScreen;
