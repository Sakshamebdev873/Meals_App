import { Stack } from "expo-router";
import "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="MealOverview" options={{ title: "Meal Overview" }} />
      <Stack.Screen
        name="MealDetailScreen"
        options={{
          title: "Meal Details",
        }}
      />
    </Stack>
  );
}
