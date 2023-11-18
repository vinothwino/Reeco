import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice';
import { appApi } from '../services/app';

const rootReducer = combineReducers({
    counter: counterReducer,
    [appApi.reducerPath]: appApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
        // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
        getDefaultMiddleware().concat(appApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch