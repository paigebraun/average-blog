/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "media",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            maxWidth: {
                prose: "80ch",
            },
            fontFamily: {
                display: ["Marion", "serif", "system-ui"],
                "issue-heading": ["Cinzel-Bold", "serif"],
                heading: ["Lodeh", "serif"],
                medium: ["Marion-Bold", "serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
