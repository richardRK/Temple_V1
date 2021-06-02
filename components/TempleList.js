import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import TempleItem from "./TempleItem";

import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";

const TempleList = (props) => {
  // const renderItem = (props) => (
  //   <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
  //     <TouchableOpacity onPress={props.onSelectMeal}>
  //       <ListItem bottomDivider>
  //         <Avatar source={props.imageUrl} />
  //         <ListItem.Content>
  //           <ListItem.Title>{props.title}</ListItem.Title>
  //           <ListItem.Subtitle>{props.address}</ListItem.Subtitle>
  //         </ListItem.Content>
  //         <ListItem.Chevron />
  //       </ListItem>
  //     </TouchableOpacity>
  //   </View>
  // );

  const renderTempleItem = (itemData) => {
    return (
      // <TempleItem
      //   title={itemData.item.title}
      //   imageUrl={itemData.item.imageUrl}
      //   timings={itemData.item.timings}
      //   address={itemData.item.address}
      //   details={itemData.item.details}
      //   onSelectMeal={() => {
      //     props.navigation.navigate("TempleDetail", {
      //       param1: itemData.item.id,
      //     });
      //   }}
      // />

      <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("TempleDetail", {
              param1: itemData.item.id,
            });
          }}
        >
          <ListItem bottomDivider>
            <Avatar source={itemData.item.imageUrl} />
            <ListItem.Content>
              <ListItem.Title>{itemData.item.title}</ListItem.Title>
              <ListItem.Subtitle>{itemData.item.address}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
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
    padding: 15,
  },
});

export default TempleList;
