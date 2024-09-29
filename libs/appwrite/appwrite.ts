import { serializeDocumentsToProducts } from "@/utils/serialize";
import { Account, Client, Databases, ID, Query } from "react-native-appwrite";
import { config } from "./config";
import { Product } from "@/constants/product.type";
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

const databases = new Databases(client);

export const getSpecialOffers = async (limit?: number) => {
  const res = await databases.listDocuments(
    config.databaseId,
    config.productCollectionId,
    limit ? [Query.limit(limit)] : []
  );
  const products = serializeDocumentsToProducts(res.documents);
  return products;
};

export const getProductsByCategoryId = async (categoryId?: string) => {
  const res = await databases.listDocuments(
    config.databaseId,
    config.productCollectionId,
    categoryId ? [Query.equal("category_id", categoryId)] : []
  );

  const products = serializeDocumentsToProducts(res.documents);
  return products;
};

export const getProductById = async (id: string) => {
  const res = await databases.getDocument(
    config.databaseId,
    config.productCollectionId,
    id
  );
  const products = serializeDocumentsToProducts([res]);
  return products[0];
};

export const getAllLikedProducts = async (
  email: string
): Promise<{
  id: string;
  products: Product[];
}> => {
  const res = await databases.listDocuments(
    config.databaseId,
    config.likedCollectionId,
    [Query.equal("user_email", email)]
  );
  const products = serializeDocumentsToProducts(
    res.documents[0].liked_products
  );
  return {
    id: res.documents[0].$id,
    products,
  };
};

export const updateLikedProducts = async (
  id: string,
  liked_products: string[]
) => {
  console.log(id, liked_products);

  try {
    await databases.updateDocument(
      config.databaseId,
      config.likedCollectionId,
      id,
      {
        liked_products,
      },
      [`update("any")`]
    );
  } catch (e) {
    console.error(e);
  }
};
