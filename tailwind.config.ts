import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily : {
      'cairo' : ['Cairo' , 'sans-serif']
    },
    extend: {
      boxShadow : {
        'tableShadow' : "0px 2px 20px 4px #1E146A0D"
      },
      colors : {
        primary: "#007B8D",
        "text-dark": "#2F3146",
        "blue-black" : "#14213D",
        'mid-grey' : "#71778E",
        'bg-grey' : "#F6F6F6",
        'divider-grey' : "#D6D8DB",
        "soft-grey": "#c9c9c9",
        "text-white": "#ffffff",
        "slate-grey": "#3F3F44",
        "light-blue" : "#E9EDF5"
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
