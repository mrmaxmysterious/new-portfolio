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
        <link href="https://languages.abranhe.com/logos.css" rel="stylesheet"></link>
      </Head>
      <main className="mx-auto w-full max-w-[1700px] px-4 space-y-72">
      <FadeIn><section className="flex flex-cols-2 gap-96 justify-center items-center h-screen" id="main">
          <div className="content-center">
            <p className="text-secondary text-5xl">Hello, I'm<br/> <span className="font-semibold">Max Henson</span></p>
            <p className="text-secondary text-xl pt-5">Full-stack developer</p>
            <p className="text-secondary text-xl font-semibold">📍 Essex, UK</p>
            <p className="pt-5">
              <i className="programming lang-typescript mr-3"></i>
              <i className="programming lang-javascript mr-3"></i>
              <i className="programming lang-python mr-3"></i>
            </p>
            <div className="flex flex-cols-2 gap-5 content-center">
              <a href="mailto:me@maxhenson.co.uk">
                <div className="bg-secondary rounded-xl text-xl pl-8 pr-8 pt-2 pb-2 mt-5 w-fit">
                  <p>Say Hi 👋</p>
                </div>
              </a>
              <a className="text-secondary content-center mt-5">
                <a href="#main">
                  <div className="flex flex-cols-2 gap-1 content-center">
                    <p>Discover my works</p> 
                    <ArrowDown/>
                  </div>
                </a>
              </a>
            </div>
          </div>
          <div className="content-center">
            {!loading ? (
              <FadeIn><img src={`https://cdn.discordapp.com/avatars/728318691716104222/${status?.discord_user.avatar}.png`} className="w-[200px] rounded-full" /></FadeIn>
            ) : (
              <p className="text-secondary">Loading avatar...</p>
            )}
          </div>
        </section></FadeIn>
        <FadeIn><section className="flex flex-rows-2 justify-center items-center" id="main">
          <div className="content-center">
            <p className="text-secondary text-5xl font-semibold text-center">Relatio <span className="text-relatio">Scheduler</span></p>
            <p className="text-secondary text-lg text-center">Your building blocks for Roblox HR.</p>
            
          </div>
          <div className="content-center">
            
          </div>
        </section></FadeIn>
      </main>
      <footer className="text-center w-full mt-72 pb-2">
        <p className="text-secondary text-xl">Created by Max & Exlim @ <span className="text-dynamic font-semibold">Dynamic</span> Graphics</p>
      </footer>
    </>
  );
}
