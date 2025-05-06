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
            Projects
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        <Card>
            <Link href='https://www.a-traq.com/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    April 01, 2025
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  ATRAQ
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: Wix Studio, Velo, Nodejs.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="atraq.png" alt="Description of image" className="w-32 h-32" />
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href='https://fassadigital.wixstudio.com/road-hero' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    April 01, 2025
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Road Hero
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: Wix Studio, Wix Stores, Velo, Nodejs.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="Road.png" alt="Description of image" className="w-32 h-32" />
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href='https://www.thisistheday.com.au/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    Jan 01, 2025
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  This Is The Day
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: Wix Studio.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="titd.png" alt="Description of image" className="w-32 h-32" />
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href='https://www.sensoriium.com/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    Jan 01, 2025
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Sensoriium
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: Wix Studio.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="sensoriium.jpg" alt="Description of image" className="w-64 h-64 object-cover" />
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href='https://www.a-traq.com/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                  January 01, 2025
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  ALONGSIDE
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: NextJs, Nodejs, Express and MongoDB.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  UI still not in development, this focuses more on functionalities
                  This is similar to dating app but in sports where a user can find other users that 
                  matched with their sports focuses more on functionalities:
                  <ul className="list-disc list-inside space-y-2">
                    <li>Registration</li>
                    <li>Login</li>
                    <li>
                      Profile:
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Update and delete functionalities</li>
                        <li>Profile pictures</li>
                        <li>Featured pictures</li>
                        <li>News feed</li>
                        <li>Overview showing users who like you</li>
                      </ul>
                    </li>
                    <li>
                      Invites:
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Invite users/players based on selected sports</li>
                        <li>Accept or decline invitations</li>
                      </ul>
                    </li>
                    <li>
                      Schedules:
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Schedule sports activities with selected users</li>
                        <li>RSVP functionality (Going / Not Going / Maybe)</li>
                      </ul>
                    </li>
                    <li>Clubs</li>
                    <li>
                      Events:
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>General page listing all created events</li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <div className="flex justify-center mt-4">
                  <img src="along.png" alt="Description of image" className="w-32 h-32" />
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href='https://main.d1b9ywoz7johau.amplifyapp.com/' target="_blank">
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
            <Link href='https://home.navqms.com/' target="_blank">
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
                  NavQMS
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: NextJs, MaterialUI, TailwindCSS, Redux, Nodejs, Express and MongoDB.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  is a specialized Quality Management System (QMS) designed to streamline and enhance compliance processes within Navy shipbuilding operations
                </p>
                <div className="flex justify-center mt-4">
                  <img src="nav.png" alt="Description of image" className="w-84 h-64 object-fit" />
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href='https://ilovegolfwhen.com/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    Jan 01, 2025
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  ILoveGolfWhen
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  TechStack: WordPress, Elementor.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  With working E-Commerce, payment, and shipping integration.
                </p>
                <div className="flex justify-center mt-4">
                  <img src="ilovegolf.png" alt="Description of image" className="w-64 h-24" />
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
