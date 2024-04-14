import React from "react";
import "./page.css";
import { LoadingProvider } from "../library";
import Sub from "./Sub";

export const Page: React.FC = () => {

    return (
        <article>
            <section className="storybook-page">
                <LoadingProvider>
                    <Sub />
                </LoadingProvider>
            </section>
        </article>
    );
};
