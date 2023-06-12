import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Header, CardView } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { countOfAll, directorData } from "../../helper/dummyData";
import { colors } from "../../utils";

const DirectorScreen = () => {
  const { goBack } = useNavigation();

  const renderItem = ({ item }) => {
    return <CardView title={item?.title} />;
  };

  const renderCountedItem = ({ item }) => {
    return (
      <View style={{ flex: 1, padding: 5, alignItems: "center" }}>
        <Text>{item?.count}</Text>
        <Text>{item?.title}</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header
        title={"સભ્ય ડિરેક્ટર"}
        isBack={true}
        isRight={true}
        isFiler={true}
      />

      <View style={style.subContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          data={countOfAll}
          renderItem={renderCountedItem}
          numColumns={4}
        />
      </View>

      <View style={style.bodyContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={directorData}
          renderItem={renderItem}
          numColumns={2}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "rgba(33, 68, 90, 0.1)",
    paddingVertical: 15,
  },
  bodyContainer: {
    flex: 3,
    bottom: 30,
  },
});

export default DirectorScreen;
