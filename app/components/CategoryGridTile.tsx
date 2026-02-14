import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type Category = {
  title: string;
  color: string;
  onPress: () => void;
};

function CategoryGridTile({ title, color, onPress }: Category) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed && Platform.OS === "ios" && styles.pressed,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // Android shadow
    backgroundColor: "transparent",
    shadowColor: "black", // iOS shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  pressable: {
    flex: 1,
    backgroundColor: "white", // REQUIRED for ripple
    borderRadius: 8,
    overflow: "hidden", // REQUIRED for ripple clipping
  },

  pressed: {
    opacity: 0.7, // iOS feedback
  },

  title: {
    color: "black",
    fontWeight: "bold",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryGridTile;
