import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import usePokedexDetail from './PokedexDetail.handler';

type Props = StaticScreenProps<{
  name: string;
}>;

const PokedexDetail = ({ route }: Props) => {
  const { name } = route.params;

  const { pokemonDetail: pokemon } = usePokedexDetail({ name });

  if (!pokemon) {
    return <Text>empty</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default PokedexDetail;
