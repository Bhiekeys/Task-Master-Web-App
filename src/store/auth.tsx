import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserAuthStore = {
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
};

type UserAuthStoreAction = {
  updateUser: (data: UserAuthStore['data']) => void;
  updateToken: (token: string) => void;
  clearToken: () => void;
  resetStore: () => void;
};

const initialAuthStore: UserAuthStore = {
  data: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  },
  token: '',
};

export const useUserAuthStore = create<UserAuthStore & UserAuthStoreAction>()(
  persist(
    (set) => ({
      ...initialAuthStore,
      updateUser: (data: UserAuthStore['data']) => {
        console.log('Updating admin data:', data);
        set((state) => ({
          ...state,
          data,
        }));
      },
      updateToken: (token: string) => {
        console.log('Updating token:', token);
        set((state) => ({
          ...state,
          token,
        }));
      },
      clearToken: () => {
        console.log('Clearing token');
        set((state) => ({
          ...state,
          token: '',
        }));
      },
      resetStore: () => {
        console.log('Resetting store');
        set(initialAuthStore);
      },
    }),
    {
      name: 'user-auth-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
