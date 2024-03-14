import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import token from "../features/slices/tokenSlice"
import user from "../features/slices/userSlice"
import { UserProfile } from "../utils/types"

const preloadedState = JSON.parse(localStorage.getItem('state') || '{}') as {token: string, user: UserProfile}

export const store = configureStore({
  reducer: {
    token, user
  },
  preloadedState
})

store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())))

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
