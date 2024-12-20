import {StaticScreenProps} from '@react-navigation/native';
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
import {PokeCard} from './components/PokeCard';
import useNavigationType from '../../hooks/useNavigationType';
import IconButton from '../../components/IconButton';
import Icon from '@react-native-vector-icons/fontawesome6';

type Props = StaticScreenProps<{}>;

const Pokedex = ({}: Props) => {
  const {pokemons, myPokemons, addToMyPokemon, deleteFromMyPokemon} =
    usePokedex();
  const navigation = useNavigationType();

  return (
    <SafeAreaView style={[styles.body, {}]}>
      {/** PokeHeader | Header */}
      <View style={[styles.container]}>
        <Image
          style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
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
                key={index}
                title={pokemon.name}
                num={pokemon.id}
                image={pokemon.image}
                onPress={() =>
                  navigation.navigate('PokemonDetail', {name: pokemon.name})
                }
                ActionComponent={
                  <IconButton
                    onPress={() => addToMyPokemon(pokemon)}
                    backgroundColor={'blue'}>
                    <Icon
                      iconStyle="solid"
                      name="plus"
                      size={20}
                      color={'white'}
                    />
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
                key={index}
                title={pokemon.name}
                num={pokemon.id}
                image={pokemon.image}
                onPress={() =>
                  navigation.navigate('PokemonDetail', {name: pokemon.name})
                }
                ActionComponent={
                  <IconButton
                    onPress={() => deleteFromMyPokemon(pokemon.id)}
                    backgroundColor={'red'}>
                    <Icon
                      iconStyle="solid"
                      name="minus"
                      size={20}
                      color={'white'}
                    />
                  </IconButton>
                }
              />
            ))
          )}
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 50, right: 20}}>
        <IconButton
          size={60}
          backgroundColor={'blue'}
          onPress={() => navigation.navigate('Camera')}>
          <Icon iconStyle="solid" name="camera" size={20} color={'white'} />
        </IconButton>
      </View>
    </SafeAreaView>
  );
};

export default Pokedex;
