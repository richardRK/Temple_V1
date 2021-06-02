import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import { TEMPLES } from "../data/dummy-data";

import DefaultText from "./DefaultText";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

const keyExtractor = (item, index) => index.toString();

const TempleItem = (props) => {

  
  const list = [
    {
      name: "Amy Farha",
      avatar_url: require("../assets/imgs/bg28.jpg"),
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url: require("../assets/imgs/bg28.jpg"),
      subtitle: "Vice Chairman",
    },
  ];

  const renderItem = (props) => (
    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
      <ListItem bottomDivider>
        <Avatar source={props.imageUrl} />
        <ListItem.Content>
          <ListItem.Title>{props.title}</ListItem.Title>
          <ListItem.Subtitle>{props.address}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );

  return (
    <View style={styles.templeItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <FlatList
          keyExtractor={keyExtractor}
          data={TEMPLES}
          renderItem={renderItem}
        />

        {/* <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={props.imageUrl} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.address}</DefaultText>
            <DefaultText>{props.timings}</DefaultText>
          </View>
        </View> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  templeItem: {
    flex: 1,
    height: 300,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },
  bgImage: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mealRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mealHeader: {
    alignSelf: "flex-end",
    height: "85%",
    alignItems: "center",
  },
  mealDetail: {
    alignSelf: "flex-end",
    alignItems: "center",
    height: "10%",
  },
  titleContainer: {
    flex: 3,
    backgroundColor: "skyblue",
    textAlign: "center",
    alignSelf: "flex-end",
  },
  title: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default TempleItem;
