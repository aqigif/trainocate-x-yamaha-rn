import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
  },
  textInput: {
    width: /*'30%'*/ '100%',
    height: 40,
    borderRadius: 25,
    //borderWidth: 1,
    //borderColor: '#ccc',
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%', // Adjust this value for grid item width
    marginBottom: 10,
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 15,
  },
  imageList: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default styles;
