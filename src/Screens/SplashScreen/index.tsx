import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  Text
} from 'react-native';
import styles from '../../GlobalVariable/stylesheet';
const SplashScreen = ({navigation}: any) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("UploadFileScreen");
    }, 5000);
  }, []);
  
  return (
    <SafeAreaView
      style={styles.container}>
      <Image
        source={require('../../Assets/fileLogo.png')}
        style={styles.logo}
      />
       <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.uploadText}>Upload Multiple Files...</Text>
    </SafeAreaView>
  );
};
export default SplashScreen;
