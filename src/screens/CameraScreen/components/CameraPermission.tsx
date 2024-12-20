import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCameraPermission } from 'react-native-vision-camera';

function CameraPermission() {
  const {requestPermission} = useCameraPermission();

  return (
    <SafeAreaView>
      <Text> no permission </Text>
      <Button
        title="Req Permission"
        onPress={() => {
          requestPermission();
        }}
      />
    </SafeAreaView>
  );
}

export default CameraPermission;
