import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../app/HomeScreen';
import Vendas from '../app/Vendas';
import Analise from '../app/Analise';
import Estoque from '../app/Estoque';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen 
          name="Estoque" 
          component={Estoque}
          options={{
            title: 'Visualizar Estoque'
          }}
        />
        <Drawer.Screen name="Vendas" component={Vendas} />
        <Drawer.Screen name="Analise" component={Analise} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}