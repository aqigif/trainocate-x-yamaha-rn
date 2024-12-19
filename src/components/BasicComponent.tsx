import { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Button from './Button';
import useSignIn from '../hooks/useSignin';

function BasicComponent() {
  const {email, setEmail, handleSubmit, loading} = useSignIn();

  return (
    <View>
      <View
        style={{
          height: 400,
          backgroundColor: 'yellow',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            //da
          }}
          style={{ backgroundColor: 'white' }}
          placeholder="input"
        />
        <Text>{email}</Text>
        <Button onPress={handleSubmit} title="Submit" loading={loading} />
        <View style={{ height: 20 }} />
        <TextInput
          style={{ backgroundColor: 'white' }}
          placeholder="password"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          height: 400,
          backgroundColor: 'red',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={require('../../assets/favicon.png')}
        />
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </View>
  );
}

export default BasicComponent;
