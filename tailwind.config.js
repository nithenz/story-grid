/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    // Ensure these match with .storybook/preview.js
    theme: {
        screens: {
            xs: "360px",
            sm: "600px",
            md: "800px",
            lg: "1024px",
            xl: "1288px",
        },
        maxWidth: {
            xs: "360px",
            sm: "600px",
            md: "800px",
            lg: "1024px",
            xl: "1288px",
        },
    },
    plugins: [],
};
