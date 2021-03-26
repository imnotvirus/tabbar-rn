import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  JournalScreen,
  MeasuresScreen,
  TreatmentScreen,
  ProfileScreen,
} from './screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, useWindowDimensions, View} from 'react-native';

const Tab = createBottomTabNavigator();

const icons = {
  Journal: {
    name: 'book-medical',
  },
  Measures: {
    name: 'heartbeat',
  },
  Treatment: {
    name: 'band-aid',
  },
  Profile: {
    name: 'brain',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Journal"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const {name} = icons[route.name];
              if (focused) {
                return (
                  <View
                    style={{
                      marginBottom: 40,
                      alignItems: 'center',
                      paddingTop: 10,
                      backgroundColor: '#3f200f',
                      borderRadius: 40,
                      width: 70,
                      height: 70,

                      elevation: 6,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.2,
                      shadowRadius: 5,
                    }}>
                    <View>
                      <FontAwesome5 name={name} size={30} color="#fff" solid />
                    </View>
                    <Text
                      style={{
                        flex: 1,
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 12,
                        elevation: 16,
                      }}>
                      {route.name}
                    </Text>
                  </View>
                );
              }
              return (
                <FontAwesome5 name={name} size={size} color={color} light />
              );
            },
          })}
          tabBarOptions={{
            showLabel: false,
            activeTintColor: 'green',
            inactiveTintColor: '#00000019',
          }}>
          <Tab.Screen name="Journal" component={JournalScreen} />
          <Tab.Screen name="Measures" component={MeasuresScreen} />
          <Tab.Screen name="Treatment" component={TreatmentScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
