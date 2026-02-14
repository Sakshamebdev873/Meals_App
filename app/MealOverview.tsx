import { CATEGORIES, MEALS } from "@/assets/Data/dummy-data";
import { useLocalSearchParams } from "expo-router";
import MealOverviewScreen from "./screens/MealOverviewScreen";

function MealOverview() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });
  //   console.log(displayedMeals);

  return (
    <MealOverviewScreen
      selectedCategory={selectedCategory}
      displayedMeals={displayedMeals}
    />
  );
}
export default MealOverview;
