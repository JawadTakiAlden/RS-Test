"use client";
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from "@tanstack/react-query";
import React, { ReactNode } from "react";

const clinet = new QueryClient();

const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BaseQueryClientProvider client={clinet}>
      {children}
    </BaseQueryClientProvider>
  );
};

export default QueryClientProvider;
