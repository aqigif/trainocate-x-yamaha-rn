import {
    Image,
    Pressable,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Button from './Button';

function Touches({text}: {text: string}) {
  return (
    <View style={{ height: 800, backgroundColor: 'blue' }}>
      <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold' }}>
        {text}
      </Text>
      <Text style={{ color: 'white', fontSize: 30 }}>{text}</Text>
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Test Button"
      />
      <View style={{ height: 20 }} />
      <TouchableOpacity
        onPress={() => console.log('touchable clicked')}
        activeOpacity={0.7}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={require('../../assets/favicon.png')}
        />
      </TouchableOpacity>
      <View style={{ height: 20 }} />
      <TouchableOpacity
        onPress={() => console.log('touchable clicked')}
        activeOpacity={0.7}
      >
        <View style={{ backgroundColor: 'red', paddingVertical: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 20 }} />
      <TouchableWithoutFeedback
        onPress={() => console.log('touchable clicked')}
      >
        <View style={{ backgroundColor: 'red', paddingVertical: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ height: 20 }} />
      <TouchableHighlight
        underlayColor="green"
        style={{ backgroundColor: 'yellow' }}
        onPress={() => console.log('touchable clicked')}
      >
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ color: 'black', textAlign: 'center' }}>Press Me</Text>
        </View>
      </TouchableHighlight>
      <View style={{ height: 20 }} />
      <Pressable
        style={{ backgroundColor: 'green' }}
        onPress={() => console.log('pressable clicked')}
      >
        {({ pressed }) => (
          <View
            style={pressed ? { paddingVertical: 20 } : { paddingVertical: 10 }}
          >
            <Text style={{ color: 'black', textAlign: 'center' }}>
              Press Me
            </Text>
            {pressed && (
              <Text style={{ color: 'black', textAlign: 'center' }}>Hi</Text>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default Touches;
