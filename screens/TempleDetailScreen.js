import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SegmentedControl from "rn-segmented-control";
import TempleDet1 from "../screens/TempleDet1";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/temples";

const TempleDetailScreen = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const availableTemples = useSelector((state) => state.temples.temples);
  const templeId = props.route.params.param1;
  const currenttempleIsFavorite = useSelector((state) =>
    state.temples.favoriteTemples.some((temple) => temple.id === templeId)
  );
  const selectedtemple = availableTemples.find(
    (temple) => temple.id === templeId
  );
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(templeId));
  }, [dispatch, templeId]);

  useEffect(() => {
    // props.navigation.setParams({ templeTitle: selectedtemple.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currenttempleIsFavorite });
  }, [currenttempleIsFavorite]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textStyle}>
          <SegmentedControl
            style={styles.text}
            tabs={["Overview", "Pujas", "Contact", "Services"]}
            currentIndex={tabIndex}
            onChange={handleTabsChange}
            segmentedControlBackgroundColor="#86c4fd"
            activeSegmentBackgroundColor="#0482f7"
            activeTextColor="white"
            textColor="black"
          />
        </View>

        <View>
          <TempleDet1 tabView={tabIndex} selectedTempleInfo={selectedtemple} />
        </View>
      </ScrollView>
    </View>
  );
};

TempleDetailScreen.navigationOptions = (navigationData) => {
  const templeId = navigationData.navigation.getParam("templeId");
  const templeTitle = navigationData.navigation.getParam("templeTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");

  //const selectedtemple = templeS.find((temple) => temple.id === templeId);
  return {
    headerTitle: templeTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontSize: 11,
    // flex: 1,
  },
  textStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "transparent",
    zIndex: 15,
    overflow: "hidden",
    position: "relative",
    height: 42,
    // width: 350,
    // textAlign: "center",
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
    // fontFamily: "montserrat-bold",
    // // maxWidth: 2,
    // // fontSize: 11,
    // fontWeight: "normal",
    // width: "auto",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    // fontWeight: "500",
    margin: 10,
  },
});

TempleDetailScreen.propTypes = {};

export default TempleDetailScreen;
