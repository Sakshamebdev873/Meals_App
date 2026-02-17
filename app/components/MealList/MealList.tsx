import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ displayedMeals }: any) => {
  const router = useRouter();
  function renderMealItem(dataItem: any) {
    function pressHandler() {
      router.push({
        pathname: "/MealDetailScreen",
        params: {
          mealId: dataItem.item.id,
        },
      });
    }
    return <MealItem {...dataItem.item} onPress={pressHandler} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealList;
