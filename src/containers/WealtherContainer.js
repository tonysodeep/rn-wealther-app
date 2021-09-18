import {connect} from 'react-redux';
import AddWealtherScreen from '../screens/AddWealtherScreen';

import {addWealther, fetchWealtherAction} from '../actions';

const mapStateToProps = state => {
  return {
    wealtherObject: state.wealtherReducers ? state.wealtherReducers : {},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchWealther: cityName => {
      dispatch(fetchWealtherAction(cityName));
    },
    onAddAction: wealtherItem => {
      dispatch(addWealther(wealtherItem));
    },
  };
};

const WealtherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddWealtherScreen);
export default WealtherContainer;
