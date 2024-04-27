"use client"
import { createContext } from "react";
import { StartLoadingOption } from "../type";

export interface LoadingContextInterface {
    open: boolean;
    startLoading: (option?: StartLoadingOption) => void;
    stopLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextInterface | undefined>(undefined);