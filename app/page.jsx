"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { FaDiscord, FaGithub, FaReact, FaSpotify } from "react-icons/fa";
import Link from "next/link";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import SpotifyEmbed from "@/components/ui/MusicPlayer";
import LiveClock from "@/components/ui/LiveClock";
import TechStackProgress from "@/components/ui/TechStackProgress";
import LearningNow from "@/components/ui/LearningNow";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen w-full overflow-y-auto">
      <Snowfall color="#FFC0CB" snowflakeCount={250} />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 h-screen w-screen object-cover -z-10"
      >
        <source src="/vagabond.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-full items-center justify-center mt-36">
        <Card className="w-full max-w-sm bg-black/50 border-none">
          <CardHeader>
            <CardTitle>
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src="/image.jpeg"
                  alt="Profile photo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </CardTitle>
            <CardDescription
              className={
                " flex-col flex items-center justify-center text-white text-[16px] gap-2"
              }
            >
              <span>Always coding, money, react, nextjs :)</span>
              <span className="flex flex-row gap-1 mt-2">
                <FaLocationDot className="mt-1" /> Uranüs
              </span>
              <span className="mt-2">
                <LiveClock />
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center justify-center gap-2">
              <Button className="hover:bg-white hover:text-black">
                <Link href="https://discord.com/users/695594556942712872">
                  <FaDiscord />
                </Link>
              </Button>
              <Button className="hover:bg-white hover:text-black">
                <Link href="https://github.com/1uc44s">
                  <FaGithub />
                </Link>
              </Button>
              <Button className="hover:bg-white hover:text-black">
                <Link href="https://open.spotify.com/user/316crq43ubf5qf7767sv66ca7c44?si=c83e037e26ca4166">
                  <FaSpotify />
                </Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 text-white">
            <CardTitle>My skills but im very beginner for web dev :(</CardTitle>
            <div className="mt-4">
              <Button variant="ghost">
                <FaReact title="I know React" />
              </Button>
              <Button variant="ghost">
                <RiNextjsFill title="i know NextJS" />
              </Button>
              <Button variant="ghost">
                <RiTailwindCssFill title="i know TailwindCSS" />
              </Button>
              <Button variant="ghost">
                <SiShadcnui title="i know ShadcnUI" />
              </Button>{" "}
              <Button variant="ghost">
                <IoLogoJavascript title="i know JavaScript" />
              </Button>
            </div>
          </CardFooter>
        </Card>{" "}
      </div>

      <div className="relative z-10 flex justify-center mt-6 mb-36">
        <div
          className="
      flex flex-col gap-6
      md:flex-row
      md:items-stretch
      w-full
      max-w-6xl
    "
        >
          <Card className="flex h-full w-full bg-black/50 border-none md:max-w-sm">
            <CardContent className="flex flex-col h-full justify-center">
              <SpotifyEmbed />
            </CardContent>
          </Card>

          <Card className="flex h-full w-full bg-black/50 border-none md:max-w-sm">
            <CardContent className="flex flex-col h-full justify-center">
              <TechStackProgress />
            </CardContent>
          </Card>

          <Card className="flex h-full w-full bg-black/50 border-none md:max-w-sm">
            <CardContent className="flex flex-col h-full justify-center">
              <LearningNow />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
