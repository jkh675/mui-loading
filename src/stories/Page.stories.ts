import type { Meta, StoryObj } from "@storybook/react";
// import { within, userEvent, expect } from "@storybook/test";

import { Page } from "./Page";

const meta = {
    title: "Example/Page",
    component: Page,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
    // play: async ({ canvasElement }) => { },
    args: {
        a: true,
    },
};
