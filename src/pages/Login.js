import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import api from '../services/api';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth', {
        email,
        password,
      });

      if (response.data) {
        await AsyncStorage.setItem('name', response.data.user.name);
        await AsyncStorage.setItem('last_name', response.data.user.last_name);
        navigation.replace('Home');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="exemplo@exemplo.com"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="*****"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  label: {
    color: '#fff',
    fontSize: 24,
  },

  input: {
    marginTop: 15,
    backgroundColor: '#FFF',
    color: '#000',
    height: 45,
    width: '100%',
    borderRadius: 10,
  },

  button: {
    height: 45,
    marginTop: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  textButton: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
