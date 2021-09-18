import {connect} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => {
  return {
    wealtherList: state.homeReducers ? state.homeReducers : [],
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;
