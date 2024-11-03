import { create } from 'zustand/react'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthActions {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const initialState: AuthState = {
  isAuthenticated: false,
}

const store = immer<AuthState & AuthActions>((setState) => ({
  ...initialState,
  setIsAuthenticated: (isAuthenticated) => setState((state) => ({ isAuthenticated })),
}))

export const authStore = create(devtools(store, {name: 'Auth Store'}))
