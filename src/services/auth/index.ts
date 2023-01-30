import instance from '../_config/instance';

export type AuthType = {
  token: string;
};

export type GetUserType = {
  name: string;
  email: string;
};

const signInRequest = (email: string, pass: string) =>
  instance.post<AuthType>('auth/signin', {
    email,
    pass,
  });

const signUpRequest = (name: string, email: string, pass: string) =>
  instance.put<AuthType>('auth/signUp', {
    name,
    email,
    pass,
  });

const validateToken = async () => {
  return instance.get('auth/validateToken');
};

const getUserRequest = async () => {
  return instance.get<GetUserType>('auth/getUser');
};

export {signInRequest, signUpRequest, validateToken, getUserRequest};
