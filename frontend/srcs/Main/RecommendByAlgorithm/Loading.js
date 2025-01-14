import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Loading = ({ updateIndex }) => {
  const [text, setText] = useState("로딩중");

  setTimeout(() => {
    const copy = text.substring();
    if (copy.length == 6) {
      updateIndex(true);
      return 0;
    }
    const newText = copy + ".";
    setText(newText);
  }, 700);

  return (
    <View style={styles.container}>
      <Text style={styles.loading}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 55,
  },
});
