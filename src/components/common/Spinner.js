import React from 'react';
import { View, Text } from 'react-native';


const Spinner = ({size}) => {
  return <View style={styles.container}>
           <Text style={styles.spinnerStyle}>Loading...</Text>
         </View>
};


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  spinnerStyle: {
    fontSize: 20,
    marginTop: 5,
  }
};

export { Spinner };
