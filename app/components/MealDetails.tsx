import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability, style }: any) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, style]}>{duration}m</Text>
      <Text style={[styles.detailItem, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, style]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
  },
});
export default MealDetails;
