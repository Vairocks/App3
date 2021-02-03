import React from "react";
import { View, Text, Button, Image, Alert, ScrollView } from "react-native";
import { SvgUri } from "react-native-svg";
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
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          <SvgUri width="10%" height="10%" uri={item.flag} />
          <Button
            title="Capital Weather"
            onPress={() => fetchDataAndMove(item.capital, navigation)}
          />
        </ScrollView>
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
