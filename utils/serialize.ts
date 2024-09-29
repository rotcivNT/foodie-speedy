import { Product, Topping } from "@/constants/product.type";
import { Models } from "react-native-appwrite";

export const serializeDocumentsToProducts = (
  documents: Models.Document[]
): Product[] => {
  const products: Product[] = documents.map((item) => {
    const available_toppings: Topping[] = item.toppings.map(
      (topping: Models.Document) => ({
        id: topping.$id,
        name: topping.name,
        price: topping.price,
        inStock: topping.inStock,
      })
    );
    return {
      id: item.$id,
      name: item.name,
      currency: item.currency,
      description: item.description,
      price_discounted: item.price_discounted,
      price_original: item.price_original,
      rating_count: item.rating_count,
      rating_score: item.rating_score,
      thumbnail: item.thumbnail,
      total_sales: item.total_sales,
      category_id: item.category_id,
      available_toppings: available_toppings,
    };
  });
  return products || [];
};
