export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  isReal?: boolean;
  aspectClass?: string;
};

export type Project = {
  id: string;
  number?: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
  caseStudyHref?: string;
  github?: string;
  images: ProjectImage[];
};

export const PROJECTS: Project[] = [
  {
    id: "recipestash",
    number: "01",
    title: "RecipeStash",
    description:
      "A modern recipe management application that helps users capture, organize, and manage recipes using AI-powered extraction from images and links. It combines smart import, manual creation, shopping lists, and meal planning in one workflow.",
    tech: ["React Native", "NestJS", "TypeScript", "MongoDB", "AI Extraction"],
    role: "Full-Stack Developer",
    year: "2026",
    caseStudyHref: "https://recipestash.food",
    images: [
      {
        src: "/videos/AI Powered Image Recipe Extraction.mov 23-33-44-038.mp4",
        alt: "RecipeStash AI image extraction",
        caption: "AI-powered image-to-recipe extraction",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/videos/AI Powered Recipe Via Link.mov 23-33-44-078.mp4",
        alt: "RecipeStash AI recipe via link",
        caption: "Recipe import and parsing from website links",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/videos/All Recipe Feature.mov 23-33-44-118.mp4",
        alt: "RecipeStash all recipe feature",
        caption: "Centralized all-recipes management view",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/videos/Create Post with Linked Recipe.mov 23-33-44-128.mp4",
        alt: "RecipeStash create post with linked recipe",
        caption: "Create posts that attach linked recipes",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/videos/Grocery Lists Feature.mov 23-33-44-135.mp4",
        alt: "RecipeStash grocery list feature",
        caption: "Auto-generated grocery lists from recipes",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/videos/Manual Create Recipe Feature.mov 23-33-44-137.mp4",
        alt: "RecipeStash manual recipe creation",
        caption: "Manual recipe creation and editing flow",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/videos/Meal Plan Feature.mov 23-33-44-138.mp4",
        alt: "RecipeStash meal planning",
        caption: "Meal planning and grocery workflow",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
    ],
  },
  {
    id: "flickbook",
    number: "02",
    title: "FlickBook",
    description:
      "A full-stack pickleball platform with social feed, matchmaking, real-time chat, ELO rating, court discovery, teams, and notifications. Built with a modular architecture focused on real-time interactions and scalable feature modules.",
    tech: ["React Native", "NestJS", "Socket.io", "MongoDB", "AWS S3"],
    role: "Full-Stack Developer",
    year: "2026",
    caseStudyHref: "https://flickbook.online",
    images: [
      {
        src: "/flickbook/Find A Court feature with Google Map-2.mp4",
        alt: "FlickBook find a court with Google Map",
        caption:
          "Shows court discovery with map pins, location search, and quick access to court details like ratings, hours, and directions.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/flickbook/Find A Game Feature With 1 on 1 chat.mp4",
        alt: "FlickBook find a game",
        caption:
          "Demonstrates matchmaking flow where players connect for games and continue planning through private 1-on-1 chat.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/flickbook/Match Feature.mp4",
        alt: "FlickBook match feature",
        caption:
          "Covers match result submission and score tracking that updates player rankings using your ELO system.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/flickbook/Matching_feature.mp4",
        alt: "FlickBook matching feature",
        caption:
          "Highlights invite and match acceptance interactions, including how users connect based on skill and availability.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/flickbook/My Day Feature.mp4",
        alt: "FlickBook My Day feature",
        caption:
          "Walkthrough of the 24-hour story-style feature where users post photo updates with captions.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/flickbook/Newsfeed Feature-2.mp4",
        alt: "FlickBook newsfeed feature",
        caption:
          "Shows the social feed experience with posting, scrolling, likes/comments, and community engagement.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/flickbook/Team Feature With Team Chat-2.mp4",
        alt: "FlickBook team feature with team chat",
        caption:
          "Demonstrates team creation and management plus real-time team chat for group coordination.",
        isReal: true,
        aspectClass: "aspect-[16/9]",
      },
    ],
  },
  {
    id: "atraq",
    number: "07",
    title: "ATRAQ",
    description:
      "Corporate/business website implementation focused on clean UI delivery, responsive behavior, and production-ready content structure.",
    tech: ["Wix Studio", "Velo", "Node.js"],
    role: "Frontend Engineer",
    year: "2025",
    caseStudyHref: "https://www.a-traq.com/",
    images: [
      {
        src: "/atraq.png",
        alt: "ATRAQ logo preview",
        caption: "ATRAQ website project",
        isReal: true,
        aspectClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "road-hero",
    number: "08",
    title: "Road Hero",
    description:
      "Website build with product-oriented presentation and custom interactions for brand and conversion-focused sections.",
    tech: ["Wix Studio", "Wix Stores", "Velo", "Node.js"],
    role: "Frontend Engineer",
    year: "2025",
    caseStudyHref: "https://fassadigital.wixstudio.com/road-hero",
    images: [
      {
        src: "/Road.png",
        alt: "Road Hero logo preview",
        caption: "Road Hero website project",
        isReal: true,
        aspectClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "this-is-the-day",
    number: "09",
    title: "This Is The Day",
    description:
      "Brand website delivery with polished visual storytelling and responsive page construction using no-code + custom logic tools.",
    tech: ["Wix Studio"],
    role: "Frontend Engineer",
    year: "2025",
    caseStudyHref: "https://www.thisistheday.com.au/",
    images: [
      {
        src: "/titd.png",
        alt: "This Is The Day logo preview",
        caption: "This Is The Day website project",
        isReal: true,
        aspectClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "sensoriium",
    number: "10",
    title: "Sensoriium",
    description:
      "Marketing/brand website with immersive visuals and clean navigation focused on showcasing product identity.",
    tech: ["Wix Studio"],
    role: "Frontend Engineer",
    year: "2025",
    caseStudyHref: "https://www.sensoriium.com/",
    images: [
      {
        src: "/sensoriium.jpg",
        alt: "Sensoriium project preview",
        caption: "Sensoriium website project",
        isReal: true,
        aspectClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "hellobilo",
    number: "05",
    title: "Hellobilo",
    description:
      "A social media platform with user profiles, multi-context newsfeeds, interactive rooms, and real-time messaging. Designed to support profile-centric and community-based engagement.",
    tech: ["Next.js", "Material UI", "Tailwind CSS", "Redux", "Node.js", "MongoDB"],
    role: "Full-Stack Developer",
    year: "2024",
    caseStudyHref: "https://main.d1b9ywoz7johau.amplifyapp.com/",
    images: [
      {
        src: "/hellobilo.png",
        alt: "Hellobilo project preview",
        caption: "Social platform with rooms and messaging",
        isReal: true,
        aspectClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "navqms",
    number: "06",
    title: "NavQMS",
    description:
      "A Quality Management System tailored for navy shipbuilding workflows. Focused on process compliance, reporting, and centralized operational visibility.",
    tech: ["Next.js", "Material UI", "Tailwind CSS", "Redux", "Node.js", "MongoDB"],
    role: "Full-Stack Developer",
    year: "2024",
    caseStudyHref: "https://home.navqms.com/",
    images: [
      {
        src: "/nav.png",
        alt: "NavQMS dashboard preview",
        caption: "Quality management platform",
        isReal: true,
        aspectClass: "aspect-[16/10]",
      },
    ],
  },  
];
