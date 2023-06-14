import { api } from "../api.js";

export const makeOrder = async (params) => {
  const { email, products } = params;

  const body = {
    email,
    products: products.map((product) => product?._id),
  };

  const { data } = await api.post("/orders", body);

  return data;
};
