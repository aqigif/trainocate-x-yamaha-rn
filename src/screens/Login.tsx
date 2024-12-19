import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Button from '../components/Button';

const Login = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View>
      <Text>Login</Text>
      <Button title="go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default Login;
