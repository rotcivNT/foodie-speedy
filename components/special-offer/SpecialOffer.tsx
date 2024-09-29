import { getSpecialOffers } from "@/libs/appwrite/appwrite";
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../home/SearchBar";
import { ProductListHeader } from "../ui/product-list/ProductListHeader";
import ProductList from "../ui/ProductList";

const SpecialOffer = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["special-offer"],
    queryFn: () => getSpecialOffers(),
  });
  return (
    <SafeAreaView className="px-3 mt-12">
      <ProductListHeader title="Special Offer" />
      <View className="my-4">
        <SearchBar />
      </View>
      <ProductList products={data || []} />
    </SafeAreaView>
  );
};

export default SpecialOffer;
