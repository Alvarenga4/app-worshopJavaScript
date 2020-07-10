import React, {useState, useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';

// import { Container } from './styles';

const Home = () => {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setName(await AsyncStorage.getItem('name'));
      setLastName(await AsyncStorage.getItem('last_name'));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text style={{color: '#000'}}>
        Seja bem vindo, {name} {last_name}{' '}
      </Text>
    </View>
  );
};

export default Home;
