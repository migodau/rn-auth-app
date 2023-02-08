import axios from 'axios';

const API_URL = 'https://identitytoolkit.googleapis.com/v1';
const API_KEY = 'YOUR API KEY';

async function auth(mode, email, password) {
  const resp = await axios.post(`${API_URL}/accounts:${mode}?key=${API_KEY}`,
  {
    email,
    password,
    returnSecureToken: true,
  });
  const token = resp.data.idToken;
  console.log(mode, { token });
  return token;
}

export function createUser(email, password) {
  return auth('signUp', email, password);
}

export function signIn(email, password) {
  return auth('signInWithPassword', email, password);
}