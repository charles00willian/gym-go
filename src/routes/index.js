import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from '../screens/Todo';
import Done from '../screens/Done';
import Categories from '../screens/Categories';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Tarefas" 
        component={Todo} 
        options={
          {
            tabBarIcon: ({color, focused}) => <Entypo name="check" size={24} color={color} />
          }
        } 
      />
      <Tab.Screen 
        name="Categorias" 
        component={Categories} 
        options={
          {
            tabBarIcon: ({color, focused}) => <MaterialIcons name="format-list-bulleted" size={24} color={color} />
          }
        } 
      />
    </Tab.Navigator>
  )
}

export default TabNavigation