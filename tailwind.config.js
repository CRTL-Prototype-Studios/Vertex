/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js,vue,jsx,ts,tsx}"]
export const theme = {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '1023px',
        // => @media (min-width: 1023px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        // Your custom screens
        'tablet': '1023px',
        'laptop': '1024px',
        'desktop': '1280px',
    },
    extend: {},
}
export const plugins = []