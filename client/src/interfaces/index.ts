export interface Post {
  author: string;
  image: string;
  text: string;
  title: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// TODO: extends
export interface RegisterCredentials {
  email: string;
  password: string;
  username: string;
}

export interface User {
  _id: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  location: string;
  password: string;
  username: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}
