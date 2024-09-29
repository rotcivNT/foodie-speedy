import { Product } from "@/constants/product.type";
import { getProductsByCategoryId } from "@/libs/appwrite/appwrite";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductListHeader } from "../ui/product-list/ProductListHeader";
import ProductList from "../ui/ProductList";
import SearchBar from "../home/SearchBar";
import { categories } from "../home/Categories";
import ProductListSkeleton from "../ui/loading/ProductListSkeleton";
import { useQuery } from "@tanstack/react-query";

const CategoryProduct = () => {
  const { cateId } = useLocalSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["products", cateId],
    queryFn: () => getProductsByCategoryId(cateId as string),
  });

  const category = useMemo(
    () => categories.find((item) => item.id === cateId),
    [cateId]
  );

  return (
    <SafeAreaView className="px-3 mt-12 flex-1">
      <ProductListHeader
        title={category?.name || ""}
        leftIcon={category?.icon}
      />
      <View className="my-4">
        <SearchBar />
      </View>
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <View className="grow-[1] h-[400px]">
          <ProductList products={data || []} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CategoryProduct;
