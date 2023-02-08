import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {}
});

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();

  function authenticate(token) {
    setToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token,
    isAuthenticated: !!token,
    authenticate,
    logout,
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
