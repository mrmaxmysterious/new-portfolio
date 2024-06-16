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
        relatio: "#40BCB3"
      },
    },
  },
  plugins: [],
} satisfies Config;