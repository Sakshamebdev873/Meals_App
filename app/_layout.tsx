import { Stack } from "expo-router";
import "react-native-gesture-handler";
import FavoritesContextProvider from "./store/context/favorites-context";
export default function RootLayout() {
  return (
    <FavoritesContextProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="MealOverview"
          options={{ title: "Meal Overview" }}
        />
        <Stack.Screen
          name="MealDetailScreen"
          options={{
            title: "Meal Details",
          }}
        />
      </Stack>
    </FavoritesContextProvider>
  );
}
