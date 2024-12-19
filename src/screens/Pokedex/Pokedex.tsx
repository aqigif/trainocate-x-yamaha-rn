import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './Pokedex.styles';
import usePokedex from './Pokedex.handler';
import React from 'react';
import { PokeCard } from './components/PokeCard';
import useNavigationType from '../../hooks/useNavigationType';
import IconButton from '../../components/IconButton';

type Props = StaticScreenProps<{}>;

const Pokedex = ({}: Props) => {
  const { pokemons, myPokemons, addToMyPokemon, deleteFromMyPokemon } = usePokedex();
  const navigation = useNavigationType();

  return (
    <SafeAreaView style={[styles.body, {}]}>
      {/** PokeHeader | Header */}
      <View style={[styles.container]}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <Text style={styles.headerTitle}>Pokedex</Text>
      </View>

      {/** PokeSearch | Search */}
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Searching" />
      </View>

      {/** Content */}
      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {pokemons.length === 0 ? (
            <Text>ini empty</Text>
          ) : (
            pokemons.map((pokemon, index) => (
              <PokeCard
                title={pokemon.name}
                num={pokemon.id}
                image={pokemon.image}
                onPress={() =>
                  navigation.navigate('PokemonDetail', { id: pokemon.id })
                }
                ActionComponent={
                  <IconButton onPress={() =>
                    addToMyPokemon(pokemon)} backgroundColor={'blue'}>
                    <Text style={{ color: 'white' }}>+</Text>
                  </IconButton>
                }
              />
            ))
          )}
        </View>

        <Text>My Pokemon: </Text>
        <View style={styles.grid}>
          {myPokemons.length === 0 ? (
            <Text>kamu belum punya koleksi pokemon</Text>
          ) : (
            myPokemons.map((pokemon, index) => (
              <PokeCard
                title={pokemon.name}
                num={pokemon.id}
                image={pokemon.image}
                onPress={() =>
                  navigation.navigate('PokemonDetail', { id: pokemon.id })
                }
                ActionComponent={
                  <IconButton onPress={() => deleteFromMyPokemon(pokemon.id)} backgroundColor={'red'}>
                    <Text style={{ color: 'white' }}>-</Text>
                  </IconButton>
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pokedex;
