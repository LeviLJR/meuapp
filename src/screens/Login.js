import {useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToCalculadora = () => {
    props.navigation.navigate('Drawer');
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        label="E-mail"
        placeholder="Insira o E-mail"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        label="Senha"
        placeholder="Insira a sua senha"
      />
      <Button style={{backgroundColor: 'gray'}} onPress={goToCalculadora}>
        Entrar
      </Button>
    </View>
  );
};

export default Login;
