module.exports = {
  theme: {
    extend: {
      keyframes: {
        "text-gradient": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "0% center" },
        },
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "text-gradient": "text-gradient 3s ease infinite",
        "background-shine": "background-shine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
