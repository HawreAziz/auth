import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, CardSection, Button, LoginLogo } from './common/'
import { Input } from 'react-native-elements'


class SigninForm extends React.Component {

  render = () => {
    return (
      <Card>
        <CardSection>
        <LoginLogo />
        </CardSection>
        <CardSection>
          <Input placeholder='Enter email' />
        </CardSection>
        <CardSection>
          <Input placeholder='Enter password' />
        </CardSection>
        <CardSection>
          <Button>Press me</Button>
        </CardSection>
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: 20,
  }
})
export default SigninForm;
