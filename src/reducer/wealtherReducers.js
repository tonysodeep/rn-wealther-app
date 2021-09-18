import {
  FETCH_FAILED,
  FETCH_SUCCEEDED,
  FETCH_WEALTHER,
} from '../actions/actionTypes';

const wealtherReducers = (weatherOject = {}, action) => {
  switch (action.type) {
    case FETCH_WEALTHER:
      return {type: 'Loading'};
    case FETCH_SUCCEEDED:
      console.log(
        'this is in reducder' + action.receivedWealther.weather[0].icon,
      );
      return {
        type: 'Success',
        wealtherObjectApi: action.receivedWealther,
      };
    case FETCH_FAILED:
      console.log('api error');
      return {
        type: 'Failed',
        errorMessage: 'Connection Error',
      };

    default:
      return weatherOject;
  }
};

export default wealtherReducers;
