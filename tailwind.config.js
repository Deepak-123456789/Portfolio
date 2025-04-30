module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        "light-content": "#313030", // Light text color
        "dark-heading": "#000000", // Black text for headings
        "dark-content": "#000000", // Black text for content
        "light-heading": "#000000", // Black color for headings
        "dark-mode": "#FFFFFF", // White background for dark mode
        "dark-card": "#F0F0F0", // Light background for cards
        "green-text": "#018C0F", // Green text (unchanged)
        greenbg: "#D7FFE0", // Green background (unchanged)
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         primary: "Poppins, sans-serif",
//       },
//       colors: {
//         "light-content": "#A7A7A7", // Light text color (for dark background, e.g., #A7A7A7 for readability)
//         "dark-heading": "#000000", // Change dark-heading to black
//         "dark-content": "#FFFFFF", // White text color for content
//         "light-heading": "#FFFFFF", // Light text color for headings
//         "dark-mode": "#000000", // Black background (dark mode)
//         "dark-card": "#363636", // Dark card background
//         "green-text": "#018C0F", // Green text (unchanged)
//         greenbg: "#D7FFE0", // Green background (unchanged)
//       },
//     },
//   },
//   plugins: [],
// };
