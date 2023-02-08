import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { signIn } from '../util/auth';

function LoginScreen() {
  const [processing, setProcessing] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function handleSignIn({ email, password }) {
    setProcessing(true);
    try {
      const token = await signIn(email, password);
      authenticate(token);
    } catch {
      Alert.alert('Authentication failed', 'Please, check your credentials');
      setProcessing(false);
    }
  }

  if (processing) {
    return <LoadingOverlay message="logging user in..." />
  }
  return <AuthContent isLogin onAuthenticate={handleSignIn} />;
}

export default LoginScreen;
