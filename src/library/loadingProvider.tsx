import { Backdrop, CircularProgress, LinearProgress } from "@mui/material";
import { ReactNode, useState } from "react";
import {
    LoadingContext,
    LoadingContextInterface,
} from "./context/LoadingContext";
import { StartLoadingOption } from "./type";

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [contextValue, setContextValue] = useState<LoadingContextInterface>({
        open: false,
        startLoading,
        stopLoading,
    });

    const [options, setOptions] = useState<StartLoadingOption>({});
    function startLoading(options?: StartLoadingOption) {
        setContextValue({
            ...contextValue,
            open: true,
        });
        setOptions(options ?? {})
    }
    function stopLoading() {
        setContextValue({
            ...contextValue,
            open: false,
        });
        if (options.onClose)
            options.onClose();
        setOptions({
            value: 0
        })
    }

    return (
        <>
            <Backdrop
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={contextValue.open}
                onClick={options.manuallyClose ? stopLoading : () => {}}
            >
                {options.linear ? (
                    <LinearProgress
                        sx={{
                            ...{
                                width: "80vw",
                            },
                            ...options.progressStyle,
                        }}
                        variant={options.variant ?? "indeterminate"}
                        color={options.color ?? "inherit"}
                        value={options.value}
                    />
                ) : (
                    <CircularProgress
                        variant={options.variant ?? "indeterminate"}
                        color={options.color ?? "inherit"}
                        value={options.value}
                        sx={{
                            ...{
                            },
                            ...options.progressStyle,
                        }}
                    />
                )}
            </Backdrop>
            <LoadingContext.Provider value={contextValue}>
                {children}
            </LoadingContext.Provider>
        </>
    );
}
