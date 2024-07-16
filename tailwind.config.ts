import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        main: "url('/bg.png')",
      },
      colors: {
        secondary: "#FFFFFF",
        relatio: "#40BCB3",
        card: "#161616",
        grey: "#0D0D0D",
      },
      boxShadow: {
        avatar: "0px 0px 184px -12px rgba(77,239,152,1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
