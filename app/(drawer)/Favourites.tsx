import { MEALS } from "@/assets/Data/dummy-data";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";

const Favourites = () => {
  const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id),
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealList displayedMeals={favoriteMeals} />;
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default Favourites;
