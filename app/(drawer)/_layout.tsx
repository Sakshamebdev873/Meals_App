import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#351401" },
        sceneStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Meal Categories",
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerIcon: ({ color, size }: any) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        options={{
          title: "Favourites",
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerIcon: ({ color, size }: any) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer>
  );
}
