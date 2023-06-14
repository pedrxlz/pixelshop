import { api } from "../../../services/api.js";
import useSWR from "swr";

const fetcher = (url) => api.get(url).then((res) => res.data);

export const useProducts = () => {
  const { data, isLoading } = useSWR("/products", fetcher);

  return {
    products: data,
    isLoading,
  };
};
