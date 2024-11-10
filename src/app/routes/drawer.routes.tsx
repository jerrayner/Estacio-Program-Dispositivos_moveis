import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import Overview from '../screens/Overview';
import Estoque from '../screens/Estoque';
import Vendas from '../screens/Vendas';
import Analise from '../screens/Analise';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#12A5BC',
        drawerActiveBackgroundColor: '#12A5BC20',
        drawerActiveTintColor: '#12A5BC',
      }}
    >
      <Drawer.Screen
        name="Overview"
        component={Overview}
        options={{
          drawerIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Estoque"
        component={Estoque}
        options={{
          drawerIcon: ({ color }) => <Feather name="package" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Vendas"
        component={Vendas}
        options={{
          drawerIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Análise"
        component={Analise}
        options={{
          drawerIcon: ({ color }) => <Feather name="bar-chart-2" size={24} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
} 