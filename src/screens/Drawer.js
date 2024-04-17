import {createDrawerNavigator} from '@react-navigation/drawer';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import CustomDrawer from '../components/CustomDrawer';
import Calculadora from './Calculadora';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerActiveTintColor: 'red',
        drawerLabelStyle: {color: 'blue'},
      }}
      drawerContent={(props) => <CustomDrawer {...props}/>}
    >
      <DrawerNavigator.Screen name="Calculadora" component={Calculadora} />
      <DrawerNavigator.Screen name="Tela2" component={Tela2} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
