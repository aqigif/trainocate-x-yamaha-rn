import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import CameraPermission from './components/CameraPermission';

function CameraScreen() {
  const device = useCameraDevice('front');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) {
    return <CameraPermission />;
  }
  if (device == null) {
    return <Text> no camera </Text>;
  }
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}

export default CameraScreen;
