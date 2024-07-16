import Head from "next/head";
import { ArrowDown, AtSign } from "lucide-react";
import FadeIn from "~/components/fadeIn";
import { useLanyard } from "react-use-lanyard";

export default function Home() {
  const { loading, status } = useLanyard({
    userId: "728318691716104222",
    socket: true,
  });

  return (
    <>
      <Head>
        <title>Max Henson</title>
        <link
          href="https://languages.abranhe.com/logos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="space-y-72">
        <FadeIn>
          <section className="flex-cols-2 flex h-screen items-center justify-center gap-96 mx-auto w-full max-w-[1700px] px-4">
            <div className="content-center">
              <p className="text-5xl text-secondary">
                Hello, I'm
                <br /> <span className="font-semibold">Max Henson</span>
              </p>
              <p className="pt-5 text-xl text-secondary">
                Full-stack developer
              </p>
              <p className="text-xl font-semibold text-secondary">
                📍 Essex, UK
              </p>
              <p className="pt-5">
                <i className="programming lang-typescript mr-3"></i>
                <i className="programming lang-javascript mr-3"></i>
                <i className="programming lang-python mr-3"></i>
              </p>
              <div className="flex-cols-2 flex content-center gap-5">
                <a href="mailto:me@maxhenson.co.uk">
                  <div className="mt-5 w-fit rounded-xl bg-secondary pb-2 pl-8 pr-8 pt-2 text-xl">
                    <p>Say Hi 👋</p>
                  </div>
                </a>
                <a className="mt-5 content-center text-secondary" href="#main">
                  <div className="flex-cols-2 flex content-center gap-1">
                    <p>Discover my works</p>
                    <ArrowDown />
                  </div>
                </a>
              </div>
            </div>
            <div className="content-center">
              {!loading ? (
                <FadeIn>
                  <img
                    src={`https://cdn.discordapp.com/avatars/728318691716104222/${status?.discord_user.avatar}.png`}
                    className="w-[200px] rounded-full shadow-avatar"
                    draggable="false"
                  />
                </FadeIn>
              ) : (
                <p className="text-secondary">Loading avatar...</p>
              )}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section
            className="relative flex-rows-2 flex items-center justify-center"
            id="main"
          >
            <div className="mx-auto w-full max-w-[1700px] px-4">
              <div className="mb-2 grid w-full place-content-center items-center">
              <p className="w-fit rounded-md bg-card pb-1 pl-3 pr-3 pt-1 text-[10px] text-secondary opacity-80">
                Main Project
              </p>
              </div>
              <p className="text-center text-5xl font-semibold text-secondary">
                Relatio <span className="text-relatio">Scheduler</span>
              </p>
              <p className="text-center text-lg text-secondary">
                Your building blocks for Roblox HR.
              </p>
              <img
                src="https://api.monosnap.com/file/download?id=3SA07zOpo0Ws1FgEcRxp7Qi02IaXK6"
                className="border-[12px] mx-auto mt-10 w-2/3 rounded-3xl border-[#1c1c1c]"
              />
            </div>
            <div className="absolute -bottom-1 h-3/4 w-full bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent"></div>
          </section>
        </FadeIn>
      </main>
      <footer className="mx-auto w-full max-w-[1700px] px-4 mt-72 pb-2 text-center">
        <p className="text-xl text-secondary">
          Created by Max & Exlim @{" "}
          <span className="text-dynamic font-semibold">Dynamic</span> Graphics
        </p>
      </footer>
    </>
  );
}
