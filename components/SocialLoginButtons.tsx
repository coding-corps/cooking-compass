import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

// Define the props type
interface SocialLoginButtonsProps {
  onLogin?: (platform: string) => void; // Optional function that accepts a platform name as a string
  action: string ; 
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ onLogin,action }) => {
  const handleLogin = (platform: string) => {
    console.log(`Logging in with ${platform}`);
    if (onLogin) {
      onLogin(platform);
    }
  };

  if (action == "") {
    action = "Login"
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#DB4437' }]} // Google red
        onPress={() => handleLogin('Google')}
      >
        <Icon name="google" type="font-awesome" color="white" style={styles.icon} />
        <Text style={styles.text}>{action} with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4267B2' }]} // Facebook blue
        onPress={() => handleLogin('Facebook')}
      >
        <Icon name="facebook" type="font-awesome" color="white" style={styles.icon} />
        <Text style={styles.text}>{action} with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:50,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SocialLoginButtons;
