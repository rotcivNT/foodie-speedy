import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import LikedIconFill from "@/assets/icons/LikedIconFill";
import LikedOutlineIcon from "@/assets/icons/LikedOutlineIcon";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import RateStarIcon from "@/assets/icons/RateStarIcon";
import ShoppingBagFillIcon from "@/assets/icons/ShoppingBagFillIcon";
import {
  getAllLikedProducts,
  getProductById,
  updateLikedProducts,
} from "@/libs/appwrite/appwrite";
import { formatToUSD } from "@/utils/formatCurrency";
import { useMutation, useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../ui/Button";
import CustomCheckbox from "../ui/MyCheckbox";
import { useUser } from "@clerk/clerk-expo";
import { useUpdateLikedProduct } from "@/hooks/useUpdateLikedProduct";

const ProductDetail = () => {
  const { user } = useUser();
  const { id } = useLocalSearchParams();

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id as string),
  });

  const { data: likedProducts } = useQuery({
    queryKey: ["product.liked"],
    queryFn: () =>
      getAllLikedProducts(user?.emailAddresses[0].emailAddress as string),
  });

  const updateLikedProductMutation = useUpdateLikedProduct();

  const onPressLiked = async () => {
    const likedProductIds =
      likedProducts?.products
        .filter((product) => (isLikedProduct ? product.id !== id : product.id))
        .map((item) => item.id) || [];
    !isLikedProduct && likedProductIds.push(id as string);

    await updateLikedProductMutation.mutateAsync({
      docId: likedProducts?.id as string,
      likedProductIds,
    });
  };

  const isLikedProduct = useMemo(() => {
    return (
      likedProducts?.products.findIndex((product) => product.id === id) !== -1
    );
  }, [likedProducts]);

  return (
    <SafeAreaView className="px-3 mt-12">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-[150px]">
          <View className="mb-5 relative">
            <Image
              className="w-full h-[300px] object-contain rounded-[12px]"
              src={data?.thumbnail}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.back()}
              className="w-10 h-10 rounded-[22px] flex justify-center items-center absolute top-8 left-5"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <ArrowLeftIcon />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onPressLiked}
              className="absolute bottom-4 right-3 w-10 h-10 rounded-full bg-white justify-center items-center"
            >
              {isLikedProduct ? <LikedIconFill /> : <LikedOutlineIcon />}
            </TouchableOpacity>
          </View>

          <View className="space-y-4 px-3">
            <Text className="text-[22px] leading-[22px] font-bold font-[Roboto] text-neutral-900">
              {data?.name}
            </Text>
            <View className="flex-row gap-x-2 items-center">
              <Text className="text-[20px] leading-[20px] text-neutral-200 line-through font-[Roboto-Regular]">
                {formatToUSD(data?.price_original || 0)}
              </Text>
              <Text className="text-[22px] leading-[22px] text-primary-500 font-[Roboto-Bold]">
                {formatToUSD(data?.price_discounted || 0)}
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-x-2 items-center">
                <RateStarIcon className="shrink-0 relative bottom-[1px]" />
                <Text className="text-base leading-[19px] font-[Roboto-Regular] text-neutral-900">
                  {data?.rating_score}
                </Text>
                <Text className="text-base leading-[19px] font-[Roboto-Regular] text-neutral-300">
                  ({data?.rating_count})
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.9}>
                <Button
                  title="See all review"
                  variant="link"
                  onPress={() => {}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                numberOfLines={3}
                className="text-base font-[Roboto-Light] text-neutral-300"
              >
                {data?.description}
              </Text>
              <TouchableOpacity
                activeOpacity={0.9}
                className="flex justify-end flex-row"
              >
                <Button title="See more" variant="link" onPress={() => {}} />
              </TouchableOpacity>
            </View>

            <View className="space-y-4">
              <Text className="text-[18px] leading-[21px] text-neutral-900 font-bold font-[Roboto]">
                Additional Options
              </Text>
              {data?.available_toppings.map((toping) => (
                <View
                  key={toping.id}
                  className="flex-row justify-between items-center"
                >
                  <Text className="flex-1 text-base leading-[19px] font-[Roboto] text-neutral-900">
                    Add {toping.name}
                  </Text>
                  <Text className="mr-3 text-base leading-[19px] font-[Roboto] text-neutral-900">
                    +{formatToUSD(toping.price)}
                  </Text>
                  <CustomCheckbox onValueChange={() => {}} value={false} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 20,
          shadowColor: "rgba(13, 10, 44, 0.20)",
          elevation: 20,
        }}
        className="flex-row justify-between items-center absolute bottom-4 left-0 right-0 bg-white rounded-[12px] h-[77px] pl-4 pr-2 mx-3"
      >
        <View className="flex-row space-x-3 items-center">
          <TouchableOpacity
            className="w-10 h-10 rounded-full flex justify-center items-center"
            style={{
              borderWidth: 1,
              borderColor: "#E9EAEB",
            }}
          >
            <MinusIcon />
          </TouchableOpacity>
          <Text className="text-[22px] leading-[26px] font-[Roboto] text-neutral-900">
            1
          </Text>
          <TouchableOpacity
            className="w-10 h-10 rounded-full flex justify-center items-center"
            style={{
              borderWidth: 1,
              borderColor: "#E9EAEB",
            }}
          >
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <Button
          activeOpacity={0.9}
          size="lg"
          title="Add to Basket"
          leftIcon={<ShoppingBagFillIcon />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
