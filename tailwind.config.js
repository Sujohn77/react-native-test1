/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                // 😎 similar to `@apply`
                '.btn': `px-4 py-1 rounded-full bg-red-800 text-white`,
                '.body-text': `font-serif leading-relaxed tracking-wide text-gray-800`,
            });
        }),
    ],
    content: [],
    theme: {
        extend: {
            backgroundImage: {
                banner: "url('./public/imgs/banner.png')",
            },
            fontFamily: {
                inter: ['Inter-Regular'],
                interMedium: ['Inter-Medium'],
            },
        },
    },
};
