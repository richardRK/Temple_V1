import React, { useEffect, useCallback } from "react";
import { Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/temples";

const TempleDet1 = ({ tabView, selectedTempleInfo }) => {

  
  switch (tabView) {
    case 0:
      return (
        <View>
          <Text>Screen1:</Text>
        </View>
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

TempleDet1.propTypes = {};

export default TempleDet1;
