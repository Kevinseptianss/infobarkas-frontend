import {configureStore} from '@reduxjs/toolkit';
import adsReducer from './ads/reducer';
import authUserReducer from './isAuth/reducer';


const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    ads: adsReducer,
  },
});

export default store;
