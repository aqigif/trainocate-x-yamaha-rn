import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AnimatedExample from '../components/AnimatedExample';
import BasicComponent from '../components/BasicComponent';
import Button from '../components/Button';
import Touches from '../components/Touches';
import ModalExample from '../components/ModalExample';
import React from 'react';

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Button onPress={() => setIsShow((prev) => !prev)} title="render" />
      {isShow ? (
        <>
          <Touches text="coba coba" />
          <BasicComponent />
          <AnimatedExample />
        </>
      ) : (
          <ModalExample />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default Home;
