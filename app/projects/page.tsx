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
            <Link href="https://recipestash.food" target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    April 2026
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  RecipeStash
                </h2>

                <p className="mt-4 text-base leading-7 text-zinc-400 group-hover:text-zinc-300">
                  Product Documentation
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Overview</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300">
                    RecipeStash is a modern recipe management application that allows users to capture,
                    organize, and manage recipes effortlessly using AI-powered tools and intuitive
                    features. It is designed for everyday users who want a centralized, smart, and
                    personalized cooking companion.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Core Features</h3>
                  <div className="space-y-5 text-zinc-400 group-hover:text-zinc-300">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">1. AI Recipe Extraction (Image to Recipe)</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Upload an image of a recipe (for example: screenshot, cookbook, handwritten notes)</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>AI automatically extracts ingredients, instructions, and recipe title</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Eliminates manual typing and speeds up recipe creation</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">2. Recipe Import via URL</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Paste a recipe link from any website</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Automatically parses and imports structured data: ingredients list, cooking steps, and metadata (if available)</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">3. Manual Recipe Creation</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Users can create recipes from scratch</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Structured input fields: title, ingredients, instructions, and notes or tips</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Designed for flexibility and ease of use</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">4. Recipe Organization</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Store all recipes in one place</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Clean and intuitive UI for browsing</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Quick access to saved recipes</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">5. Smart Shopping List</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Convert ingredients into a shopping list</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Helps users prepare before cooking</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Reduces friction in meal planning</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">6. Meal Planning</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Plan meals ahead of time</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Assign recipes to specific days</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Helps with time management, grocery planning, and diet consistency</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">7. News Feed / Discovery</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Displays recipe-related updates or content</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Keeps users engaged and inspired</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Supports future scalability (for example: community features)</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">8. User Profiles</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Personalized user experience</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Stores user-specific data: recipes, preferences, and activity</span></li>
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
            <Link href="#" target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    April 2026
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  FlickBook - Full-Stack Pickleball Matchmaking App
                </h2>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Overview</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300">
                    FlickBook is a full-stack mobile application built for the pickleball community.
                    It combines social networking, competitive matchmaking, real-time messaging,
                    and court discovery into a single platform. It is purpose-built for players who
                    want to find games, track their performance, and connect with others.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Tech Stack</h3>
                  <div className="space-y-4 text-zinc-400 group-hover:text-zinc-300">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Frontend</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>React Native (TypeScript): Cross-platform mobile app (iOS and Android)</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>React Navigation: Stack and bottom tab navigation</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>socket.io-client: Real-time WebSocket for chat and notifications</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>react-native-maps: Interactive Google Maps with custom markers</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>react-native-geolocation-service: Precise GPS location detection</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>react-native-image-picker: Camera and photo library access</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>lucide-react-native: Icon library</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Parkinsans: Custom app-wide font</span></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">Backend</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>NestJS (TypeScript): Modular REST API framework</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>MongoDB and Mongoose: Primary database with TTL indexes</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Socket.io: Real-time events for chat and notifications</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>JWT: Access and refresh auth tokens</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>bcrypt: Password hashing</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>AWS S3: Image storage for posts, day stories, and avatars</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Google Places API: Court discovery and location autocomplete</span></li>
                        <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>@nestjs/schedule: Cron jobs for post expiry and ELO decay</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Features</h3>
                  <div className="space-y-3 text-zinc-400 group-hover:text-zinc-300">
                    <p><span className="text-zinc-300 font-medium">1. Authentication:</span> Full email/password signup and login with JWT access and refresh tokens, Google OAuth sign-in, password reset via email, and persistent sessions using AsyncStorage.</p>
                    <p><span className="text-zinc-300 font-medium">2. Social Feed:</span> Scrollable feed with posts, likes, comments, and nested replies. Supports S3 image uploads and profile navigation from author taps.</p>
                    <p><span className="text-zinc-300 font-medium">3. My Day (Stories):</span> 24-hour story feature with up to 10 photos, captions, horizontal story bar, full-screen viewer, and TTL-based auto expiry.</p>
                    <p><span className="text-zinc-300 font-medium">4. Find a Game:</span> Matchmaking board for Looking to Play and Looking for Players posts, invite flow, auto-created 1-on-1 chat on acceptance, Google Places autocomplete, and 24-hour post expiry.</p>
                    <p><span className="text-zinc-300 font-medium">5. Real-Time Chat:</span> Socket.io 1-on-1 chat with optimistic sends, read receipts, HTTP fallback when disconnected, and paginated message history.</p>
                    <p><span className="text-zinc-300 font-medium">6. ELO Rating System:</span> CS2-inspired system with placements, adaptive K-factor, upset and streak modifiers, inactivity decay, 10 tiers, and leaderboard filters.</p>
                    <p><span className="text-zinc-300 font-medium">7. Court Map:</span> Live GPS location, nearby court loading, autocomplete search, custom markers, court detail sheet, filters, and zoom controls.</p>
                    <p><span className="text-zinc-300 font-medium">8. Teams:</span> Team roles (Owner, Captain, Member), profiles, invites by handle, join approvals, member management, and visibility controls.</p>
                    <p><span className="text-zinc-300 font-medium">9. User Profiles and Follow System:</span> Public profiles with ELO badge and activity tabs, plus animated optimistic follow/unfollow interactions.</p>
                    <p><span className="text-zinc-300 font-medium">10. Notifications:</span> Real-time delivery with 15 event types, deep linking, unread filters, grouped sections, mark-all-read, and preference toggles.</p>
                    <p><span className="text-zinc-300 font-medium">11. Score Tracking:</span> Singles and doubles score submission that triggers ELO updates for all participants.</p>
                    <p><span className="text-zinc-300 font-medium">12. Settings:</span> Dark/light theme toggle, notification preferences, and profile editing.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Architecture Highlights</h3>
                  <ul className="space-y-1 text-sm text-zinc-400 group-hover:text-zinc-300 ml-4">
                    <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Modular NestJS backend with self-contained feature modules (Auth, Days, Teams, GamePosts, Chat, Notifications, Rating) wired through `app.module.ts`</span></li>
                    <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Global NotificationsModule marked with `@Global()` so any service can trigger notifications through a single injected service</span></li>
                    <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Deferred S3 uploads keep images as local URIs until submit, avoiding orphaned objects from abandoned drafts</span></li>
                    <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Precise GPS setup with `maximumAge: 0` and `watchPosition` updates only when accuracy improves</span></li>
                    <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>Theme system keeps layout in `StyleSheet.create()` and applies colors inline via `useTheme().colors` for instant theme switching</span></li>
                    <li className="flex items-start"><span className="text-zinc-600 mr-2">•</span><span>MongoDB TTL indexes automatically expire stories, game invites, and notifications without manual cleanup jobs</span></li>
                  </ul>
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

                {/* <div className="mt-8">
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
                </div> */}
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
                <div className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
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
                </div>
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
