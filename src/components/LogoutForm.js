import React from 'react';
import { Card, CardSection, Button } from './common';
import firebase from 'firebase';

const LogoutForm = () => {
  return <Card>
           <CardSection>
             <Button onPress={() => {
               console.log('logout');
               firebase.auth().signOut()}}>Logout</Button>
           </CardSection>
         </Card>
};


export default LogoutForm;
