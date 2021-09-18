import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import WealtherContainer from './src/containers/WealtherContainer';
import allReducers from './src/reducer';

import createSagaMiddleware from 'redux-saga';

import {mySaga} from './src/sagas/wealtherSagas';
import HomeContainer from './src/containers/HomeContainer';

const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="AddWealther" component={WealtherContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
