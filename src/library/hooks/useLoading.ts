import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";


export default function useLoading() {
    const loading = useContext(LoadingContext);
    return loading;
}