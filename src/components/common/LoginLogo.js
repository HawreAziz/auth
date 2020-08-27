import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const LoginLogo = () => {
  return <View style={styles.container}>
             <Image
               style={styles.imageStyle}
               source={require("../../../resources/login.jpg")}
             />
         </View>
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  imageStyle: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 75
  }
});

export { LoginLogo };
