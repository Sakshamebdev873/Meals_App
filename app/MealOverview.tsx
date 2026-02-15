import { CATEGORIES, MEALS } from "@/assets/Data/dummy-data";
import { Stack, useLocalSearchParams } from "expo-router";
import MealOverviewScreen from "./screens/MealOverviewScreen";

function MealOverview() {
  const { categoryId, title } = useLocalSearchParams<{
    categoryId: string;
    title: string;
  }>();

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });
  //   console.log(displayedMeals);

  return (
    <>
      <Stack.Screen
        options={{
          title: title,
        }}
      />
      <MealOverviewScreen
        selectedCategory={selectedCategory}
        displayedMeals={displayedMeals}
      />
    </>
  );
}
export default MealOverview;
