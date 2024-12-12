import {ActionType} from './action';

function adsReducer(ads = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ADS:
      return action.payload.ads;
    case ActionType.RESET_ADS:
      return null;
    default:
      return ads;
  }
}

export default adsReducer;
