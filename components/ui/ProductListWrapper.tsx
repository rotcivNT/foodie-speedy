import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { useMemo } from "react";
import { View, Text } from "react-native";
import { categories } from "../home/Categories";

interface ProductListHeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
}

const ProductListHeader = ({ title, leftIcon }: ProductListHeaderProps) => {
  return (
    <View>
      <ArrowLeftIcon />
      <View>
        {leftIcon}
        <Text>{title}</Text>
      </View>
    </View>
  );
};

interface BaseProps {
  isCategory: boolean;
}

interface CategoryProps extends BaseProps {
  isCategory: true;
  categoryId: string;
}

interface TitleProps extends BaseProps {
  isCategory: false;
  title: string;
}

type IProps = CategoryProps | TitleProps;

const ProductListWrapper = (props: IProps) => {
  const { isCategory } = props;
  const category = useMemo(() => {
    return isCategory
      ? categories.find((category) => category.id === props.categoryId)
      : undefined;
  }, []);
  return (
    <View>
      <ProductListHeader
        title={isCategory ? (category?.name as string) : props.title}
        leftIcon={isCategory ? category?.icon : undefined}
      />
    </View>
  );
};

export default ProductListWrapper;
