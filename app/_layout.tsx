import { Stack } from "expo-router";

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
      <Stack.Screen
        name="index"
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen name="MealOverview" options={{ title: "Meal Overview" }} />
      <Stack.Screen
        name="MealDetail"
        options={{
          title: "Meal Details",
        }}
      />
    </Stack>
  );
}
