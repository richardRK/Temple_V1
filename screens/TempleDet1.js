import React, { useEffect, useCallback } from "react";
import { Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/temples";

const TempleDet1 = ({ tabView, propInfo }) => {


  const availableTemples = useSelector((state) => state.temples.temples);
  const templeId = propInfo.route.params.param1;
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
    // propInfo.navigation.setParams({ templeTitle: selectedtemple.title });
    propInfo.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    propInfo.navigation.setParams({ isFav: currenttempleIsFavorite });
  }, [currenttempleIsFavorite]);

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

    // default:
    //   return (
    //     <View>
    //       <Text>Default:</Text>
    //     </View>
    //   );
  }
};

TempleDet1.propTypes = {};

export default TempleDet1;
