//Importação
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

//Definição da função do componente
const Botao = props => {
  const texto = props.texto;

  return (
    <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
      <Text style={estilos.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#00008e',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  texto: {
    padding: 12,
    alignItems: 'center',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'RobotoMono-Regular',
  },
});

//Exportação
export default Botao;
