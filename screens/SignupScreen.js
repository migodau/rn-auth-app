import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [processing, setProcessing] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function handleSignup({ email, password }) {
    setProcessing(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
    } catch {
      Alert.alert('Sign up faild', 'Could not create the user. Check your input');
      setProcessing(false);
    }
  }

  if (processing) {
    return <LoadingOverlay message="creating user..." />
  }
  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
