
import React from 'react';
import { View } from 'react-native';
import Button from './../../components/button';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Chat from '../screens/chat';
import SearchResources from '../screens/resources-search';
import AddResource from '../screens/resource-add';
import EditResource from '../screens/resource-edit';
import MyResources from '../screens/resources-my';
import Map from '../screens/map';
import { HomeIcon, DonateIcon, SearchIcon } from '../images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
    <Tab.Screen
      name='Donate'
      component={DonateStackLayout}
      options={{
        tabBarIcon: ({color}) => (<DonateIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => (<SearchIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const ResourcesStackOptions = ({ navigation }) => {
    return ({
      headerRight: () => (
        <View style={{marginRight: '20px',}}>
          <Button
            onPress={() => navigation.navigate('Chat')}
            title='Chat '
          />
        </View>

      )
    });
  };
  
  const DonationsStackOptions = ({ navigation }) => {
    return ({
      headerRight: () => (
        <View style={{marginRight: '20px',}}>
          <Button
            onPress={() => navigation.navigate('Add Donation')}
            title='Add '
          />
        </View>
      )
    });
  };
  
  const tabBarOptions = {
    // showLabel: false,
    activeTintColor: '#1062FE',
    inactiveTintColor: '#000',
    style: {
      backgroundColor: '#F1F0EE',
      paddingTop: 5
    }
  };
  

const DonateStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='My Donations' component={MyResources} options={DonationsStackOptions} />
    <Stack.Screen name='Add Donation' component={AddResource} />
    <Stack.Screen name='Edit Donation' component={EditResource} />
  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search Resources' component={SearchResources} options={ResourcesStackOptions} />
    <Stack.Screen name='Chat' component={Chat} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

export default TabLayout;