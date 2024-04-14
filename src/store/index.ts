import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import storage from './sync_storage';
import { persistReducer, persistStore } from 'redux-persist';

const combinedReducer = combineReducers({

})
const persistedReducer = persistReducer({
    key: 'alusaifer',
    storage,
}, combinedReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true,
});

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const wrapper = createWrapper(() => store)