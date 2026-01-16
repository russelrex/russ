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
        
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-base text-zinc-400">
            Click on any project card below to view the live application
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
          <Card>
            <Link href='https://dashboard-example-001.vercel.app/' target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    January 2026
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Enterprise Dashboard & CRM Platform
                </h2>
                
                <p className="mt-4 text-base leading-7 text-zinc-400 group-hover:text-zinc-300">
                  A comprehensive business management platform featuring integrated payment processing, 
                  user management, CRM capabilities, and real-time communication tools.
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-zinc-400 group-hover:text-zinc-300">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Stripe integration for seamless payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Advanced dashboard for managing users, roles, and permissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Full-featured CRM for managing customers, projects, and tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Real-time chat functionality for seamless team communication</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Technology Stack</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Frontend Framework & Core</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Next.js 16.1.2 (App Router, Server Components, Turbopack)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>React 19.0.0</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>TypeScript 5</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Tailwind CSS 3.4.1</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Authentication & Security</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>NextAuth.js 4.24.11 (JWT strategy, Google OAuth, Credentials)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>bcryptjs 2.4.3</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Database & Backend</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>MongoDB 6.11.0</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Mongoose 8.8.3</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Next.js API Routes</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Real-time & Communication</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Ably 2.12.0</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>WebSocket support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1">
          <Card>
            <Link href='#'>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    January 2026
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  GoFetch - Task Marketplace Platform
                </h2>

                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-md">
                  <span className="text-sm font-medium text-amber-400">
                    🚧 Personal Project - Currently in Development (Not Yet Deployed Live)
                  </span>
                </div>
                
                <p className="mt-4 text-base leading-7 text-zinc-400 group-hover:text-zinc-300">
                  A full-stack mobile marketplace platform that connects clients who need tasks completed with fetchers 
                  willing to complete them. Similar to TaskRabbit meets Grab, GoFetch enables anyone to post errands 
                  (grocery shopping, food delivery, pickup services) and allows other users to bid on and complete 
                  these tasks for a client-determined delivery fee.
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Technology Stack</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Frontend (Mobile)</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>React Native - Cross-platform mobile development (iOS & Android)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Expo - Development toolchain and build system</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>TypeScript - Type-safe development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>React Navigation - Screen navigation and routing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Expo SecureStore - Secure credential storage</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>React Native Maps - Location services and tracking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Lucide React Native - Icon library</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Backend (API)</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>NestJS - Progressive Node.js framework</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>TypeScript - End-to-end type safety</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>JWT (jsonwebtoken) - Secure authentication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>bcryptjs - Password hashing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>MongoDB - NoSQL database for flexible data models</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Mongoose - MongoDB object modeling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Class Validator - DTO validation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Infrastructure & DevOps</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Railway - Backend hosting and deployment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Render - Alternative backend hosting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>MongoDB Atlas - Cloud database hosting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Docker - Containerization (optional)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Git/GitHub - Version control and CI/CD</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Development Tools</h4>
                      <ul className="space-y-1 text-sm text-zinc-400 ml-4">
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Cursor IDE - AI-assisted development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>Postman - API testing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>ESLint & Prettier - Code quality</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-zinc-600 mr-2">→</span>
                          <span>pnpm - Fast package manager</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-4">App Screenshots</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch001.png" alt="GoFetch App Screenshot 1" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch002.png" alt="GoFetch App Screenshot 2" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch003.png" alt="GoFetch App Screenshot 3" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch004.png" alt="GoFetch App Screenshot 4" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch005.png" alt="GoFetch App Screenshot 5" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch006.png" alt="GoFetch App Screenshot 6" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch007.png" alt="GoFetch App Screenshot 7" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch008.png" alt="GoFetch App Screenshot 8" className="w-full h-auto object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all">
                      <img src="gofetch/fetch009.png" alt="GoFetch App Screenshot 9" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </Card>
        </div>
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
