import React from "react";
import { View, Text, Button, Image, Alert } from "react-native";
const axios = require("axios");

const fetchDataAndMove = (capital, navigation) => {
  try {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=b7d7f802a2ec37d37936b1eace8a0fe3&query=" +
          capital
      )
      .then((response) => {
        navigation.navigate("CapitalInfo", {
          data: response.data,
        });
      })
      .catch((e) => {
        Alert.alert(`${e}`);
      });
  } catch (e) {
    Alert.alert(`${e}`);
  }
};

const Rescountry = ({ data, navigation }) => {
  if (data) {
    const comp = data.map((item) => {
      return (
        <View>
          <Text>Capital : {item.capital}</Text>
          <Text>Population : {item.population}</Text>
          <Text>
            Latitude: : {item.latlng[0]}, Longitude : {item.latlng[1]}
          </Text>
          <Text>Image:</Text>
          <Image
            source={{ uri: item.flag }}
            style={{ width: 40, height: 40 }}
          />
          <Button
            title="Capital Weather"
            onPress={() => fetchDataAndMove(item.capital, navigation)}
          />
        </View>
      );
    });
    return comp;
  } else
    return (
      <View>
        <Text>Nothing</Text>
      </View>
    );
};

const CountryInfo = ({ navigation, route }) => {
  return <Rescountry data={route.params.data} navigation={navigation} />;
};

export default CountryInfo;
