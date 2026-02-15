import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

function MealOverviewScreen({ selectedCategory, displayedMeals }: any) {
  // console.log(selectedCategory, displayedMeals);
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
