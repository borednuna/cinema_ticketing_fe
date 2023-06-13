import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // use sessionStorage instead of storage

const persistConfig = {
  key: 'root',
  storage: sessionStorage, // use sessionStorage instead of storage
};

const rootReducer = (state, action) => {
  // your root reducer code
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
