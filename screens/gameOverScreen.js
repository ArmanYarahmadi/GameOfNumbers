import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>The Game is Over!</Text>
        <Text style={styles.text2}>Number of rounds: {props.roundsNumber}</Text>
        <Text style={styles.text3}>Number was: {props.userNumber}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="NEW GAME"
          onPress={props.onRestart}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textContainer: {
    padding: 10,
    height: "25%",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text1: {
    fontSize: 30,
    color: "black",
  },
  text2: {
    fontSize: 15,
  },
  text3: {
    fontSize: 15,
  },
  button: {
    width: "40%",
  },
});

export default GameOverScreen;
