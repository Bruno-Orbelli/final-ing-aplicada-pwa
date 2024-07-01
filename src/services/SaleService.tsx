import axios from "axios";

type SaleItem = {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    revenue: number;
  };
   
export const getSaleItems = async (token: string) => {
  const saleItems: SaleItem[] = [];
  var quantities: { [id: number]: number } = {};
  const orderDetails = await axios.get("http://localhost:8080/api/order-dets", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (orderDetails.status !== 200) {
    return [];
  }
  for (const item of orderDetails.data) {
    if (quantities[item.id]) {
      quantities[item.product.productName] += item.quantity;
    } else {
      quantities[item.product.productName] = item.quantity;
    }
  }
  console.log(quantities);
  const products = await axios.get("http://localhost:8080/api/products", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (products.status !== 200) {
    return [];
  }
  for (const item of products.data) {
    const saleItem: SaleItem = {
      id: item.id,
      productName: item.productName,
      price: item.price,
      quantity: quantities[item.productName] || 0,
      revenue: (quantities[item.productName] || 0) * item.price,
    };
    saleItems.push(saleItem);
  }
  console.log(saleItems);
  return saleItems;
};
  
export const getTotalRevenue = (saleItems: SaleItem[]) => {
  return saleItems.reduce((total, item) => total + item.revenue, 0);
};
  