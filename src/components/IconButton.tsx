import React from 'react';
import {ColorValue, TouchableOpacity} from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  size?: number;
  backgroundColor?: ColorValue;
}

const IconButton = ({children, backgroundColor, size = 30, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginTop: 20,
        height: size,
        width: size,
        backgroundColor: backgroundColor || 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size / 2,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
