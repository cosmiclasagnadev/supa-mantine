import {MantineThemeOverride} from "@mantine/core";

export const theme: MantineThemeOverride = {
    colors: {
        brand: [
            // Put your brand's color palette here
            // For Example:
            // "#ebfafa",
            // "#caeded",
            // "#a7e2e2",
            // "#84d7d6",
            // "#66cccc",
            // "#50b3b2",
            // "#408b8b",
            // "#2e6363",
            // "#1b3b3b",
            // "#051414",
        ],
    },
    // This will be used as a default color for all components. Change it to your liking.
    // Reference for all available colors: https://mantine.dev/theming/colors/#default-colors
    primaryColor: "teal",
    primaryShade: {light: 8, dark: 7},
    headings: {
        // This will be used as a default font family for all headings. Change it to your liking.
        // For Example: (Custom font)
        // fontFamily: "Sora, sans-serif",
        fontWeight: 700,
        sizes: {
            h1: {fontSize: 42},
            h2: {fontSize: 32},
            h3: {fontSize: 28},
            h4: {fontSize: 24},
            h5: {fontSize: 18},
            h6: {fontSize: 16}
        }
    },
    // This will be used as a default font family for all components. Change it to your liking.
    // For Example: (Custom font)
    fontFamily: "Public Sans, sans-serif",
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
};
