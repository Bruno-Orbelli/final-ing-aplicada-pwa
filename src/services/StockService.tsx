import axios from "axios";

type StockItem = {
  id: number;
  productName: string;
  stock: number;
};

export const getLowStockItems = async (token: string) => {
  const products = await axios.get("http://localhost:8080/api/products", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (products.status !== 200) {
    return [];
  }

  const stockItems = products.data as StockItem[];
  return stockItems.filter((item) => item.stock <= 30);
};
  