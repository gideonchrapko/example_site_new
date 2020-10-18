import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers/Cart'; 


const persistConfig = {
    key: 'root',
    storage,
  }

  const pReducer = persistReducer(persistConfig, reducer);

  export const store = createStore(pReducer);
  export const persistor = persistStore(store);

  export default { store, persistor }

// export default createStore(reducer);