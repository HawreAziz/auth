import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card,
         CardSection,
         Button,
         LoginLogo,
         Input,
         Spinner } from './common/'
import firebase from 'firebase';


class SigninForm extends React.Component {
  state = { email : '', password: '', errorMsg : '', loading: false};

  onButtonPress = () => {
    const {email, password} = this.state
    this.setState({ errorMsg: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLogInSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(this.onLogInSuccess.bind(this))
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: error, loading: false});
      })
     })
  }


  onLogInSuccess(){
    this.setState({ email: '', password: '', errorMsg: '', loading: false });
  }

  render = () => {
    return (
      <Card>
        <CardSection>
        <LoginLogo />
        </CardSection>
        <Input
          label='Email'
          value={this.state.email}
          placeholder='user@email.com'
          onChangeText={email => this.setState({ email })}
        />
        <Input
          label='Password'
          value={this.state.password}
          placeholder='password'
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        {this.state.errorMsg
          ? <Text style={styles.errorStyle}>Login failed, try another email and password</Text>
          : null}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

  renderButton(){
    return !this.state.loading
      ? <Button onPress={this.onButtonPress}>Press me</Button>
      : <Spinner size={50}/>
  }
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: 20,
  },
  errorStyle: {
    color: 'red',
    fontSize: 18
  }
});

export default SigninForm;
