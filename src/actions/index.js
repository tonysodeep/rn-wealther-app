import {
  FETCH_WEALTHER,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_WEALTHER,
} from './actionTypes';

export const fetchWealtherAction = cityName => {
  return {
    type: FETCH_WEALTHER,
    cityName: cityName,
  };
};

export const fetchSucceededAction = receivedWealther => {
  return {
    type: FETCH_SUCCEEDED,
    receivedWealther,
  };
};

export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error,
  };
};

export const addWealther = wealtherItem => {
  return {
    type: ADD_WEALTHER,
    wealtherItem,
  };
};
