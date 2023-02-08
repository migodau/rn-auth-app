import axios from 'axios';
const API_URL = 'https://expenses-ctrl-default-rtdb.firebaseio.com';

export async function getMessage(token) {
  const resp = await axios.get(`${API_URL}/message.json?auth=${token}`);
  return resp.data;
}