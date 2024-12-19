import type { NavigationProp } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/Navigation';

const useNavigationType = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return navigation;
};

export default useNavigationType;
