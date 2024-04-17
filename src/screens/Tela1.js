import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';

const Tela1 = (props) => {
  return (
    <View>
      <Text>Tela1</Text>
      <Button onPress={props.navigation.toggleDrawer}>Abir Drawer</Button>
    </View>
  );
};

export default Tela1;
