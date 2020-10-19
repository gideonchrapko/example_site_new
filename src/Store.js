import { createStore } from 'redux';
import reducer from './reducers/Cart'; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)

export default createStore(persistedReducer);



// const store = createStore(reducer);
// export default store;



// export default createStore(reducer);
