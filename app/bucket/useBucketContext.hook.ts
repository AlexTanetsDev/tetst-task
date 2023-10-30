import React, { ReactNode, createContext, useContext } from "react";
import { IGropedSlots } from "../types/types";

export type GlobalBucket = {
  initialState: IGropedSlots;
  setInitialState: (state: IGropedSlots) => void;
};
const context = createContext<GlobalBucket>({
  initialState: {},
  setInitialState: () => {},
});
export const useBucketContext = () => useContext(context);

export const BucketContext = context.Provider;
