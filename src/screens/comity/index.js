import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ComityCardView, Divider, Header } from "../../components";
import { comityMemberData } from "../../helper/dummyData";

const ComityScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={style.cardViewStyle}>
        <ComityCardView data={item} />
      </View>
    );
  };
  return (
    <View style={style.mainContainer}>
      <Header title={"કમિટી મેમ્બર"} isBack={true} />

      <FlatList
        data={comityMemberData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item, index }) => {
          return (
            <>
              <Divider title={item.title} mainContainer={{ marginTop: 20 }} />
              <FlatList
                scrollEnabled={false}
                data={item.members}
                renderItem={renderItem}
                contentContainerStyle={{ justifyContent: "space-between" }}
                numColumns={2}
              />
            </>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardViewStyle: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default ComityScreen;
