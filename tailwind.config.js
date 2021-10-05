module.exports = {
    mode: "jit",
    purge: {
        content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
        // options: {
        //     safelist: ["bg-green-500", "bg-indigo-500"],
        // },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
