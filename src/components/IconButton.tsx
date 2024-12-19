import { ColorValue, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  backgroundColor?: ColorValue;
}

const IconButton = ({ children, backgroundColor, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 20,
        height: 30,
        width: 30,
        backgroundColor: backgroundColor || 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
