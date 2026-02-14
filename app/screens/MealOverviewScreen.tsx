import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

function MealOverviewScreen({ selectedCategory, displayedMeals }: any) {
  // console.log(selectedCategory, displayedMeals);
  function renderMealItem(dataItem: any) {
    return <MealItem title={dataItem.item.title} />;
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealOverviewScreen;
