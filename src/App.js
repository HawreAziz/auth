import React from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import SinginForm from './components/SigninForm';


class App extends React.Component {
  _UNSAFE_componentWillMount = () => {
      firebase.initializeApp({
        apiKey: "AIzaSyCQQXBcVZw6hllaauugHGHube4d4i1Cd_0",
        authDomain: "atuhentication-2370f.firebaseapp.com",
        databaseURL: "https://atuhentication-2370f.firebaseio.com",
        projectId: "atuhentication-2370f",
        storageBucket: "atuhentication-2370f.appspot.com",
        messagingSenderId: "947698012238",
        appId: "1:947698012238:web:62222861bcada86ccbf31f",
        measurementId: "G-TWTFJRQQ5N"
      });
      console.log('firebase setup...');
  }

  render = () => {
      return (
        <View style={{ flex: 1}}>
          <Header headerText='Authentication' />
          <SinginForm />
        </View>
      );
    }
}

export default App;
