// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                secondary: '#0A0A0A',
                primary: '#00A6ED',
                white: '#FFFFFF',
            },
        },
        variants: {},
        plugins: [],
    }
};
