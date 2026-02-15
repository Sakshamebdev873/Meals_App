import { CATEGORIES } from "@/assets/Data/dummy-data";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import Category from "../../models/category";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen() {
  const router = useRouter();
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      router.push({
        pathname: "/MealOverview",
        params: {
          categoryId: itemData.item.id,
          title: itemData.item.title,
        },
      });
    }
    return (
      <CategoryGridTile
        title={itemData?.item?.title}
        color={itemData?.item?.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item: Category) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
const styles = StyleSheet.create({});
export default CategoryScreen;
