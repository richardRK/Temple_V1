import React, { useState } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";
import SegmentedControl from "rn-segmented-control";

import TempleDet1 from "../screens/TempleDet1";

const TempleDetailScreen = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);


  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textStyle}>
          <SegmentedControl style={styles.text}
            tabs={["Overview", "Pujas", "Contact", "Services"]}
            currentIndex={tabIndex}
            onChange={handleTabsChange}
            segmentedControlBackgroundColor="#86c4fd"
            activeSegmentBackgroundColor="#0482f7"
            activeTextColor="white"
            textColor="black"
            // paddingVertical={8}
            // paddingHorizontal={8}

            // style={styles.textStyle}
          />
        </View>

        <View>
          <TempleDet1 tabView={tabIndex} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontSize: 11,
    // flex: 1,
   
  },
  textStyle: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'transparent',
    zIndex: 15,
    overflow: 'hidden',
    position: 'relative',
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
