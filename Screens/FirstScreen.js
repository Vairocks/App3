import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
const axios = require("axios");

const FirstScreen = ({ navigation }) => {
  const [value, onChangeText] = useState("");

  const fetchDataAndMove = () => {
    try {
      axios
        .get("https://restcountries.eu/rest/v2/name/" + value)
        .then((response) => {
          navigation.navigate("CountryInfo", {
            data: response.data,
          });
        });
    } catch (e) {
      Alert.alert(`${e}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter a country name</Text>
      <TextInput
        style={{ borderColor: "gray", borderWidth: 1, width: 150 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        title="Submit"
        onPress={() => {
          fetchDataAndMove();
        }}
        disabled={!value}
      />
    </View>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
