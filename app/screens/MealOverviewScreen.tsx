import MealList from "../components/MealList/MealList";

function MealOverviewScreen({ selectedCategory, displayedMeals }: any) {
  // console.log(selectedCategory, displayedMeals);

  return (
    <>
      <MealList displayedMeals={displayedMeals} />
    </>
  );
}

export default MealOverviewScreen;
