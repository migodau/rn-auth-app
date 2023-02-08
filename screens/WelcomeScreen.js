
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';
import { getMessage } from '../util/message';

function WelcomeScreen() {
  const [message, setMessage] = useState('');
  const { token } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      const msg = await getMessage(token);
      setMessage(msg);
    }
    fetchData();
  }, [])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{ message }</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
