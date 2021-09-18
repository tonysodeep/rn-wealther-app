import {ADD_WEALTHER} from '../actions/actionTypes';

const homeReducers = (wealtherList = [], action) => {
  switch (action.type) {
    case ADD_WEALTHER:
      return [...wealtherList, action.wealtherItem];
    default:
      return wealtherList;
  }
};

export default homeReducers;
