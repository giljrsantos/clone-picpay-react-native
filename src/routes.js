import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Home from './Pages/Home';
import Wallet from './Pages/Wallet';
import Pay from './Pages/Pay';
import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    },
}

function Navigation(){
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if(route.name === 'Pay'){
                        return (
                            <PayButton
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        );
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: 'Início'
                }}
            />
            <Tab.Screen 
                name="Wallet" 
                component={Wallet}
                options={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen 
                name="Pay" 
                component={Pay} 
                options={{
                    title: ''
                }}
            />
            <Tab.Screen 
                name="Notifications" 
                component={Home}
                options={{
                    title: 'Notificações'
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Home}
                options={{
                    title: 'Ajuste'
                }}
            />                        
        </Tab.Navigator>
    );
}

export default Navigation;