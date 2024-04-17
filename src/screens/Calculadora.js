//Importação
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useState} from 'react';
import Botao from '../components/Botao';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

//Definição
const Calculadora = props => {
  const [txtPeso, setPeso] = useState('');
  const [txtAltura, setAltura] = useState('');
  const [txtImc, setIMC] = useState('');

  const calcularIMC = () => {
    let peso = parseFloat(txtPeso);
    let altura = parseFloat(txtAltura);

    let resultado = peso / (altura * altura);

    if (isNaN(resultado)) {
      resultado = 0;
    } else {
      setIMC('O seu resultado é ' + resultado.toFixed(2));
    }
  };

  const limpar = () => {
    setAltura('');
    setPeso('');
    setIMC('');
  };

  const voltar = () => {
    props.navigation.goBack();
  };

  return (
    <PaperProvider theme={theme}>
      <View style={estilos.view}>
        <View style={estilos.cImagem}>
          <Icon name="monitor-weight" size={60} color="#ffff"></Icon>
          {/* <Image
          style={estilos.imagem}
          source={{
            uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk',
          }}
        /> */}
        </View>

        <View style={estilos.cInput}>
          {/* 
          <Text style={estilos.texto}>Peso: </Text>
          <TextInput
            style={estilos.textInput}
            value={txtPeso}
            onChangeText={setPeso}
          /> */}
          <TextInput
            style={estilos.textInput}
            label="Peso"
            value={txtPeso}
            onChangeText={setPeso}
            placeholder="Digita o seu peso em kg"
          />
          <TextInput
            style={estilos.textInput}
            label="Altura"
            value={txtAltura}
            onChangeText={setAltura}
            placeholder="Digita o seu peso em m"
          />
          {/* 
          
          <Text style={estilos.texto}>Altura: </Text>
          <TextInput
            style={estilos.textInput}
            value={txtAltura}
            onChangeText={setAltura}
          /> */}
        </View>

        <View style={estilos.cBotoes}>
          <Botao texto="LIMPAR" funcao={limpar} />
          <Botao texto="CALCULAR" funcao={calcularIMC} />
        </View>

        <View style={estilos.cResultado}>
          <TextInput
            style={estilos.textInput}
            label="O Resultado será exibido aqui"
            value={txtImc}
          />

          <Botao texto="VOLTAR" funcao={voltar}></Botao>
          {/* <Text style={estilos.texto}>Resultado: </Text>
          <Text style={estilos.textInput}>{txtImc}</Text> */}
        </View>

        {/* <TouchableOpacity onPress={calcularIMC}>
      <Text style={estilos.botao} >
        CALCULAR
      </Text>
      </TouchableOpacity> */}
      </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
    flexDirection: 'column',
  },
  texto: {
    marginTop: 20,
    fontSize: 24,
    color: 'white',
    fontFamily: 'RobotoMono-Bold',
  },
  textInput: {
    padding: 5,
    marginTop: 20,
    height: 60,
    fontSize: 22,
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    fontFamily: 'RobotoMono-Regular',
  },
  cImagem: {
    marginTop: 0,
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cInput: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cBotoes: {
    flex: 0.25,
    justifyContent: 'center',
  },
  cResultado: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

//Exportação
export default Calculadora;
