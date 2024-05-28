/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customGrey : "#FBFBFD",
        customDarkGrey : "#F5F5F7",
        customStickyGrey : "#F9F9F9",
        customSpecButtonGrey : "#E8E8ED",
        customSpecButtonBlack : "#1D1D1F",
        customGreyBall :"#7D7E80",
        customSilverBall : "#E3E4E6",
        customBlackBall: "#2E2C2F",
        customButtonColor:"#0071E3",
      },
      screens:{
        'small' : '500px'
      }
    },
  },
  plugins: [],
}

