import createAxiosInstance from './createAxiosInstance';
import { LoginCredentials, RegisterCredentials } from '@/interfaces';

const axios = createAxiosInstance();

export async function login(credentials: LoginCredentials) {
  const { data } = await axios.post('/login', credentials);
  return data;
}

export async function register(credentials: RegisterCredentials) {
  const { data } = await axios.post('/login', credentials);
  return data;
}
