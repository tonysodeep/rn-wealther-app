import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import WealtherItem from '../components/WealtherItem';

const HomeScreen = props => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          title="go"
          onPress={() => props.navigation.navigate('AddWealther')}
        />
      ),
    });
  }, [props.navigation]);
  return (
    <View style={styles.main}>
      {props.wealtherList.length === 0 ? (
        <Text>No result Yet</Text>
      ) : (
        <FlatList
          data={props.wealtherList}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <WealtherItem
                  name={item.name}
                  ic={item.ic}
                  dt={item.dt}
                  description={item.description}
                  temp={item.temp}
                  country={item.country}
                />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  itemContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
