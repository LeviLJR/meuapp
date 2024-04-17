import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Image
          style={{height: 100, width: 100, alignSelf: 'center'}}
          source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}}
        />
        <Text style={{fontSize: 12, color: 'blue', alignSelf: 'center'}}>
          luana.teixeira@yahoo.com.br
        </Text>
      </View>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        labelStyle={{color: 'blue'}}
        label="Calculadora"
        onPress={() => {
          props.navigation.push('Calculadora');
        }}
      /> */}
      <DrawerItem
        labelStyle={{color: 'blue'}}
        label="Sair"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
