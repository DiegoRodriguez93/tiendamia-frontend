"use client";
import { FC, ReactNode } from "react";
import { SWRConfig } from "swr";

type SWRProvider = {
  children: ReactNode;
};
export const SWRProvider: FC<SWRProvider> = ({ children }) => {
  return <SWRConfig>{children}</SWRConfig>;
};
