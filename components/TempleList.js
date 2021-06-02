import React, { useState, useEffect, useCallback } from "react";

import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import TempleItem from "./TempleItem";

import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";

const TempleList = (props) => {
  // const [fontLoaded, setFontLoaded] = useState("");

  // const statusIsOpen = (status) => {
  //   if (status == true) setFontLoaded("Open");
  //   else setFontLoaded("Close");
  // };

  const renderTempleItem = (itemData) => {
    return (
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("TempleDetail", {
                param1: itemData.item.id,
              });
            }}
          >
            <ListItem bottomDivider>
              <Avatar style={styles.bgImage} source={itemData.item.imageUrl} />

              <ListItem.Content>
                <ListItem.Title>{itemData.item.title}</ListItem.Title>

                <ListItem.Subtitle>{itemData.item.address}</ListItem.Subtitle>
                <ListItem.Subtitle>
                  {itemData.item.status ? "Open" : "Close"}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
              <View style={styles.distance}>
                <ListItem.Subtitle>{itemData.item.distance}</ListItem.Subtitle>
              </View>
            </ListItem>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderTempleItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 15,
    // width: "30%",
  },

  bgImage: {
    flexDirection: "row",
    width: "30%",
    // height: "100%",
    // justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    // padding: 15,
  },

  distance: {
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    alignSelf: "flex-start",
    // justifyContent: "flex-start",
    // width: "30%",
    // // height: "100%",
    // // justifyContent: "",
    // alignItems: "center",
    // flexWrap: "wrap",
    // padding: 15,
  },

  // mealRow: {
  //   flexDirection: "row",
  //   // flexWrap: "wrap",
  // },
  // mealHeader: {
  //   alignSelf: "flex-end",
  //   // height: "85%",
  //   alignItems: "center",
  // },
});

export default TempleList;
