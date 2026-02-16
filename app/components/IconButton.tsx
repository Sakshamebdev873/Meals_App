import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
const IconButton = ({ onPress, icon, color }: any) => {
  return (
    <Pressable style={({ pressed }) => (pressed ? styles.pressed : null)}>
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default IconButton;
