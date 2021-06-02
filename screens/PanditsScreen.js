import React from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

const keyExtractor = (item, index) => index.toString();

const PanditsScreen = (props) => {
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

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={item.avatar_url} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.item}>
      <Card>
        <Card.Title>Card</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../assets/imgs/bg28.jpg")}></Card.Image>

        <Text>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>

      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

PanditsScreen.propTypes = {};

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "wrap",
    padding: 25,
  },

  // body: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // flexWrap: "wrap",
  //   padding: 25,
  // },
});

export default PanditsScreen;
