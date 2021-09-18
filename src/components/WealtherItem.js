import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const WealtherItem = pramas => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContentTop}>
        <Text
          style={
            styles.textCountry
          }>{`${pramas.name}, ${pramas.country}`}</Text>
      </View>
      <View style={styles.cardContentMidle}>
        <Text style={styles.textTemp}>{`${Math.round(pramas.temp)}°`}</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${pramas.ic}@2x.png`,
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <View style={styles.cardContentMidle}>
        <Text>{pramas.dt}</Text>
        <Text style={styles.textDescription}>{pramas.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  cardContentTop: {},
  cardContentMidle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTemp: {
    fontSize: 60,
  },
  textCountry: {
    fontWeight: 'bold',
    color: '#528DD9',
  },
  textDescription: {
    color: '#3084F2',
    fontWeight: 'bold',
  },
});

export default WealtherItem;
