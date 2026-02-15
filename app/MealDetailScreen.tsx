import { MEALS } from "@/assets/Data/dummy-data";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "./components/MealDetail/List";
import Subtitle from "./components/MealDetail/Subtitle";
import MealDetails from "./components/MealDetails";
const MealDetail = () => {
  const { mealId } = useLocalSearchParams<{ mealId: string }>();
  const selectedMeal = MEALS.find((item) => item.id == mealId);
  if (!selectedMeal) {
    return null; // or <Text>Meal not found</Text>
  }

  const {
    duration,
    affordability,
    complexity,
    imageUrl,
    title,
    ingredients,
    steps,
  } = selectedMeal;
  return (
    <>
      <Stack.Screen
        options={{
          title: title,
        }}
      />

      <ScrollView style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails
          affordability={affordability}
          duration={duration}
          complexity={complexity}
          style={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle text="Ingredients" />
            <List items={ingredients} />
            <Subtitle text="Steps" />
            <List items={steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
export default MealDetail;
