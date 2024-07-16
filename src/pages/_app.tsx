import localFont from "next/font/local";
import { type AppType } from "next/app";

const font = localFont({
  src: "../../public/fonts/pjs.ttf",
});

import "~/styles/globals.css";

const Portfolio: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${font.className} bg-main bg-cover bg-no-repeat`}>
      <Component {...pageProps} />
    </main>
  );
};

export default Portfolio;