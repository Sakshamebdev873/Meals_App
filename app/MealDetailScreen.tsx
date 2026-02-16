import { MEALS } from "@/assets/Data/dummy-data";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "./components/IconButton";
import List from "./components/MealDetail/List";
import Subtitle from "./components/MealDetail/Subtitle";
import MealDetails from "./components/MealDetails";
const MealDetail = () => {
  const { mealId } = useLocalSearchParams<{ mealId: string }>();
  const selectedMeal = MEALS.find((item) => item.id == mealId);
  const navigation = useNavigation();
  function pressHandler() {
    console.log("I am pressed");
  }
  // useLayoutEffect runs synchronously after React calculates the layout but BEFORE the screen is painted.
  useLayoutEffect(() => {
    if (!selectedMeal) return;

    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton onPress={pressHandler} icon="star" color="white" />
      ),
    });
  }, [selectedMeal]);
  const {
    duration,
    affordability,
    complexity,
    imageUrl,
    title,
    ingredients,
    steps,
  }: any = selectedMeal;

  return (
    <>
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
