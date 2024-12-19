import { ActivityIndicator, Pressable, Text, View } from 'react-native';

function button({
  title,
  onPress,
  loading,
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
}) {
  return (
    <Pressable style={{ backgroundColor: 'red' }} onPress={onPress}>
      {({ pressed }) => (
        <View
          style={
            pressed
              ? { paddingVertical: 20, flexDirection: 'row' }
              : { paddingVertical: 10, flexDirection: 'row' }
          }
        >
          {loading && <ActivityIndicator />}
          <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

export default button;
