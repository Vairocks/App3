import React from "react";
import { View, Text, Button, Image } from "react-native";

const CapitalInfo = ({ navigation, route }) => {
  const data = route.params.data;
  return (
    <View style={{ justifyContent: "center" }}>
      <Text>Temperature : {data.current.temperature}</Text>
      <Text>Wind Speed : {data.current.wind_speed}</Text>
      <Text>Precipitation: {data.current.precip}</Text>
      <Text>Image:</Text>
      <Image
        source={{ uri: data.current.weather_icons[0] }}
        style={{ width: 40, height: 40 }}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CapitalInfo;
