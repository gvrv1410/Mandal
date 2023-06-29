import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components";
import SubCardView from "../../components/common/SubCardView";
import { marriageData } from "../../helper/dummyData";
import { Height } from "../../utils/responsive";

const MarriageScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"લગ્ન વિષયક"}
        isBack={true}
        isRight={true}
        isFiler={true} />

      <View style={{ flex: 1, marginVertical: 16 }}>

        <FlatList
          data={marriageData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('MarriageBio', { data: item })}>
                <SubCardView
                  name={item.name}
                  village={item.village}
                  city={item.city}
                  dob={item.dob}
                  address={item.address}
                  isDob={true}
                  height={Height(200)}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>

    </View>
  );
};

export default MarriageScreen;
