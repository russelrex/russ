import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Personal Projects
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href='https://main.d2ulhmldzdm7lg.amplifyapp.com/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    Aug 09, 2024
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Hellobilo
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: NextJs, MaterialUI, TailwindCSS, Redux, Nodejs, Express and MongoDB.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A streamlined social media platform offering key features such as user profiles, dynamic newsfeeds (General, Room-specific, and Profile-focused), interactive rooms for discussions, and real-time messaging (General, Profile, and Room Chats)
                </p>
                <div className="flex justify-center mt-4">
                  <img src="hellobilo.png" alt="Description of image" className="w-64 h-64 object-cover" />
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href='https://store-app-lake.vercel.app/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    Aug 01, 2024
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Store
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: NextJs, MaterialUI, TailwindCSS, Redux, Nodejs, Express.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A simple store application featuring robust filtering options, a functional search bar, product view, and feedbacks.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="store.png" alt="Description of image" className="w-64 h-64 object-cover" />
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href='https://virtualworkworld-nccg.vercel.app/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    Aug 01, 2023
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  VirtualWorkWorld
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: Angular, Ng-Bootstrap
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A job board and platform that connects employers with virtual assistants and remote workers.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="vvw.png" alt="Description of image" className="w-64 h-64 object-cover" />
                </div>
              </article>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
