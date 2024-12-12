import api from '../../utils/api';
const ActionType = {
  RECEIVE_ADS: 'RECEIVE_ADS',
  RESET_ADS: 'RESET_ADS',
};

function receiveAdsActionCreator(ads) {
  return {
    type: ActionType.RECEIVE_ADS,
    payload: {
      ads,
    },
  };
}


function asyncGetAd() {
  return async (dispatch) => {
    const ads = await api.getAllAds();
    dispatch(receiveAdsActionCreator(ads));
    return ads;
  };
}

function asyncGetAdSearch(search) {
  return async (dispatch) => {
    const ads = await api.getAdsSearch(search);
    dispatch(receiveAdsActionCreator(ads));
    return ads;
  };
}


export {
  ActionType,
  receiveAdsActionCreator,
  asyncGetAd,
  asyncGetAdSearch,
};
