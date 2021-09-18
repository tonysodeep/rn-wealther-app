import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import WealtherItem from '../components/WealtherItem';

const AddWealtherScreen = (props, {navigation}) => {
  const [cityName, setCityName] = useState('');

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={'Input city name'}
          onChangeText={text => setCityName(text)}
          value={cityName}
        />
        <Button
          title="Get Wealther"
          onPress={() => {
            console.log(cityName);
            props.onFetchWealther(cityName);
          }}
        />
      </View>
      <View style={styles.body}>{renderComponent(props.wealtherObject)}</View>
      {props.wealtherObject.type === 'Success' ? (
        <Button
          title="add to home Screen"
          onPress={() => {
            const objectWealther = {
              name: props.wealtherObject.wealtherObjectApi.name,
              ic: props.wealtherObject.wealtherObjectApi.weather[0].icon,
              dt: moment(props.wealtherObject.wealtherObjectApi.dt).format(
                'h:mm a',
              ),
              description:
                props.wealtherObject.wealtherObjectApi.weather[0].description,
              temp: props.wealtherObject.wealtherObjectApi.main.temp,
              country: props.wealtherObject.wealtherObjectApi.sys.country,
            };
            props.onAddAction(objectWealther);
            props.navigation.navigate('Home');
          }}
        />
      ) : null}
    </View>
  );
};
const renderComponent = (state, action) => {
  console.log(state.type);
  if (state.type === 'Loading') {
    return (
      <View>
        <Text>Loading wealther</Text>
      </View>
    );
  }
  if (state.type === 'Failed') {
    return (
      <View>
        <Text>{state.errorMessage}</Text>
      </View>
    );
  }
  if (state.type === 'Success') {
    console.log('this is in view' + state.wealtherObjectApi.name);
    return (
      <View style={styles.resultContainer}>
        <WealtherItem
          name={state.wealtherObjectApi.name}
          ic={state.wealtherObjectApi.weather[0].icon}
          dt={moment(state.wealtherObjectApi.dt).format('h:mm a')}
          description={state.wealtherObjectApi.weather[0].description}
          temp={state.wealtherObjectApi.main.temp}
          country={state.wealtherObjectApi.sys.country}
        />
      </View>
    );
  }
  return (
    <View>
      <Text>No reulst yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    padding: 20,
    flex: 4,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  body: {
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  resultContainer: {
    marginVertical: 40,
    width: '100%',
  },
});

export default AddWealtherScreen;
