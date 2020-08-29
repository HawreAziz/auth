import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Spinner } from './components/common';
import SigninForm from './components/SigninForm';
import LogoutForm from './components/LogoutForm';


class App extends React.Component {
  state = { loggedIn:  null };

  componentDidMount = () => {
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
      firebase.auth().onAuthStateChanged(user => {
        user ? this.setState({ loggedIn: true })
             : this.setState({ loggedIn: false })
      });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return <LogoutForm />
      case false:
        return <SigninForm />
      case null:
        return <Spinner />
    }
  }

  render = () => {
      return (
        <View style={{ flex: 1}}>
          <Header headerText='Authentication' />
          {this.renderContent()}
        </View>
      );
    }
}

export default App;
