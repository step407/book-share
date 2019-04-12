/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer} from 'react-navigation';
import LoginPage from './src/loginPage'
import SignUpPage1 from './src/signUpPage'
import signUpPage2 from './src/signUp2'
import homePage from './src/homePage'
import browsePage from './src/browsePage'
import BrowsePage from './src/browsePage'


const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginPage,
            navigationOptions: () => ({
                headerTransparent: true
            
            }),},
        
        SignUp1: { screen: SignUpPage1 },

        SignUp2: { screen: signUpPage2 },

        HomePage: {
            screen: homePage,
            navigationOptions: () => ({

                headerRight: (
                    <Icon
                        name='navicon'
                        type='evilicon'
                        color='#007FEB'
                        onPress={() => alert('This is a button!')}
                        containerStyle={style = { margin: 15 }}
                    />
                )
            })},

        BrowsePage: {
            screen: browsePage,
            navigationOptions: () => ({
                
                headerRight: (
                    <Icon
                        name='navicon'
                        type='evilicon'
                        color='#007FEB'
                        onPress={() => alert('This is a button!')}
                        containerStyle={style= {margin: 15}}
                    />
                )
            })

        }

},

    {
        initialRouteName: "Login"
}
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}


