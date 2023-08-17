"use client";
import useSWR from "swr";

import { fetcher } from "../config/swr";

const useGetTableData = (url: string | null) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default useGetTableData;
