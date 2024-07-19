import { jwtDecode } from 'jwt-decode';

interface MyToken {
  name: string;
  exp: number;
}

/**
 * Validate if the token is valid or has expired
 * @param token the jwt token
 * @returns boolean
 */
export const isTokenValid = (token: string) => {
  try {
    if (!token) return false;
    const decoded = jwtDecode<MyToken>(token);
    if (Date.now() >= decoded.exp * 1000) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
