import { Tabs } from 'expo-router/tabs';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FEFFFF',
          height: 85,
          paddingTop: 5,
          paddingBottom: 30,
          borderTopWidth: 0.5,
          borderTopColor: '#E5E5E5',
        },
        tabBarActiveTintColor: '#12A5BC',
        tabBarInactiveTintColor: '#8E8E93',
        headerStyle: {
          backgroundColor: '#FEFFFF',
        },
        headerTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Estoque"
        options={{
          title: 'Estoque',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Vendas"
        options={{
          title: 'Vendas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Analise"
        options={{
          title: 'Análise',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bar-chart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 