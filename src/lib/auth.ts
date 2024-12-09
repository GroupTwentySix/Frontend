import axios from 'axios';

export interface LoginResponse {
  token: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
}

export interface SignupResponse {
  message: string;
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await axios.post('http://localhost:7000/login', credentials);
    return response.data;
  } catch (error: any) {
    // Pass through the exact error message from the server
    throw new Error(error.response?.data || 'Login failed');
  }
}

export async function signup(credentials: SignupCredentials): Promise<SignupResponse> {
  try {
    const response = await axios.post('http://localhost:7000/register', {
      ...credentials,
      role: 'USER'
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data || 'Signup failed');
  }
} 