import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import storage from './sync_storage';

const combinedReducer = combineReducers({

})

interface MakeStoreProps { isServer: boolean }
const makeStore = () => {
    // if (props?.isServer) {
    //     //If it's on server side, create a store
    //     return configureStore({
    //         reducer: combinedReducer,
    //         middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //             serializableCheck: false
    //         }),
    //         devTools: true,
    //     });
    // } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require('redux-persist');

    const persistConfig = {
        key: 'quater',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
        devTools: true,
    }); // Creating the store again    

    (store as any).__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
    // }
};

const store = configureStore({
    reducer: combinedReducer,
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const wrapper = createWrapper(makeStore)