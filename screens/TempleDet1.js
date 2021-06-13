import React, { useEffect, useCallback } from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/temples";
import DefaultText from "../components/DefaultText";

const TempleDet1 = ({ tabView, selectedTempleInfo }) => {
  switch (tabView) {
    case 0:
      return (
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={selectedTempleInfo.imageUrl}
              />
            </View>

            <View style={styles.details}>
              <DefaultText>{selectedTempleInfo.details}</DefaultText>
            </View>
          </View>
        </ScrollView>
      );

    case 1:
      return (
        <View>
          <Text>Screen2:</Text>
        </View>
      );
    case 2:
      return (
        <View>
          <Text>Screen3:</Text>
        </View>
      );
    case 3:
      return (
        <View>
          <Text>Screen4:</Text>
        </View>
      );

    default:
      return (
        <View>
          <Text>Default:</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    flexWrap: "wrap",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",

    padding: 50,
    flexWrap: "wrap",
  },
  image: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    padding: 150,
  },
});

TempleDet1.propTypes = {};

export default TempleDet1;
