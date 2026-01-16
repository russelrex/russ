"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { useState } from "react";
import { FaAngular, FaBootstrap, FaElementor, FaGithub, FaGitlab, FaNodeJs, FaPhp, FaReact, FaWix, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoIonic } from "react-icons/io";
import { DiCodeigniter, DiJqueryLogo, DiMongodb } from "react-icons/di"
import { SiAwsamplify, SiCurseforge, SiCypress, SiExpo, SiJira, SiLodash, SiMysql, SiRedux, SiTypescript, SiNestjs, SiStripe } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import Particles from "../components/particles";
import { Wix_Madefor_Display } from "@next/font/google";

const technologies = [
	{ name: 'React', icon: FaReact },
	{ name: 'React Native', icon: TbBrandReactNative },
	{ name: 'Cursor', icon: VscCode },
	{ name: 'Claude AI', icon: BsRobot },
	{ name: 'ExpoDev', icon: SiExpo },
	{ name: 'NestJS', icon: SiNestjs },
	{ name: 'Stripe', icon: SiStripe },
	{ name: 'Wix', icon: FaWix },
	{ name: 'Wordpress', icon: FaWordpress },
	{ name: 'Elementor', icon: FaElementor },
	{ name: 'Angular', icon: FaAngular },
	{ name: 'NextJs', icon: RiNextjsFill },
	{ name: 'CodeIgniter', icon: DiCodeigniter },
	{ name: 'Ionic', icon: IoLogoIonic },
	{ name: 'WordPress', icon: FaWordpress },
	{ name: 'Bootstrap', icon: FaBootstrap },
	{ name: 'NodeJs', icon: FaNodeJs },
	{ name: 'Jquery', icon: DiJqueryLogo },
	{ name: 'PHP', icon: FaPhp },
	{ name: 'Typescript', icon: SiTypescript },
	{ name: 'Javascript', icon: IoLogoJavascript },
	{ name: 'Redux', icon: SiRedux },
	{ name: 'Lodash', icon: SiLodash },
	{ name: 'MongoDB', icon: DiMongodb },
	{ name: 'MySQL', icon: SiMysql },
	{ name: 'Cypress', icon: SiCypress },
	{ name: 'Gitlab', icon: FaGitlab },
	{ name: 'Github', icon: FaGithub },
	{ name: 'AWSamplify', icon: SiAwsamplify },
	{ name: 'Jira', icon: SiJira },
  ];

  const frontEndTechnologies = [
	{ name: 'React', icon: FaReact },
	{ name: 'React Native', icon: TbBrandReactNative },
	{ name: 'Wix', icon: FaWix },
	{ name: 'Wordpress', icon: FaWordpress },
	{ name: 'Elementor', icon: FaElementor },
	{ name: 'Angular', icon: FaAngular },
	{ name: 'NextJs', icon: RiNextjsFill },
	{ name: 'CodeIgniter', icon: DiCodeigniter },
	{ name: 'Ionic', icon: IoLogoIonic },
	{ name: 'Redux', icon: SiRedux },
	{ name: 'WordPress', icon: FaWordpress },
	{ name: 'Bootstrap', icon: FaBootstrap },
	{ name: 'Typescript', icon: SiTypescript },
	{ name: 'Javascript', icon: IoLogoJavascript },
  ];

  const backEndTechnologies = [
	{ name: 'NodeJs', icon: FaNodeJs },
	{ name: 'NestJS', icon: SiNestjs },
	{ name: 'Jquery', icon: DiJqueryLogo },
	{ name: 'PHP', icon: FaPhp },
	{ name: 'MongoDB', icon: DiMongodb },
	{ name: 'MySQL', icon: SiMysql },
  ];
  
  const otherTechnologies = [
	{ name: 'Stripe', icon: SiStripe },
	{ name: 'Cypress', icon: SiCypress },
	{ name: 'Gitlab', icon: FaGitlab },
	{ name: 'Github', icon: FaGithub },
	{ name: 'AWSamplify', icon: SiAwsamplify },
	{ name: 'Jira', icon: SiJira },
	{ name: 'Cursor', icon: VscCode },
	{ name: 'Claude AI', icon: BsRobot },
  ];

export default function Example() {
	const [isAll , setAll] = useState(true);
	const [isFront , setFront] = useState(false);
	const [isBack , setBack] = useState(false);
	const [isOthers , setOthers] = useState(false);

	return (
	<div className="relative pb-16">
      <Navigation />	  	
	  <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
		<div className="grid md:grid-cols-2 gap-4 sm:grid-rows-auto">
		  	<div className="flex justify-center">
				<img src="rr.jpg" alt="Description of image" className="rounded-full transform transition-all hover:scale-110 w-32 h-32 md:w-64 md:h-64" />
			</div>
		  	<div className="max-w-2xl mx-auto lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
					Russel Rex Jimenez Onyot
				</h2>
				<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
				A passionate full-stack developer with a deep love for building innovative web solutions. I thrive on exploring the latest technologies and creating applications that are both functional and user-friendly. My expertise spans across front-end frameworks like React, Angular, and Next.js, and I have a strong foundation in back-end technologies like Node.js, Express, and MongoDB.
				In addition to my technical skills, I have experience working with modern development tools such as Redux, Tailwind CSS, and Git, which help streamline and optimize my workflow. I take pride in writing clean, maintainable code and am always eager to solve complex challenges.
				</p>
        	</div>
		</div>

        <div className="w-full h-px bg-zinc-800" />

		<div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 h-full sm:h-[50rem]">
			<div>
				<h2 className="text-2xl font-bold tracking-tight text-zinc-100">
					Skills & Technologies
				</h2>
			</div>
			<div className="flex justify-center">
				<ul className="flex list-none space-x-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
					<li className="text-end">
						<button onClick={() => {
							setAll(true)
							setFront(false);
							setBack(false);
							setOthers(false);
						}} 
						className="px-2 rounded-md w-24 transition-all ease-out duration-300 border border-zinc-300 hover:border-zinc-500 hover:text-zinc-500 text-zinc-300 h-8">
							All
						</button>
					</li>
					<li>
						<button onClick={() => {
							setFront(true)
							setAll(false)
							setBack(false);
							setOthers(false);
						}} 
						className="px-2 rounded-md w-24 transition-all ease-out duration-300 border border-zinc-300 hover:border-zinc-500 hover:text-zinc-500 text-zinc-300 h-8">Front End</button>
					</li>
					<li>
						<button onClick={() => {
							setBack(true);
							setFront(false)
							setAll(false)
							setOthers(false);
						}} className="px-2 rounded-md w-24 transition-all ease-out duration-300 border border-zinc-300 hover:border-zinc-500 hover:text-zinc-500 text-zinc-300 h-8">Back End</button>
					</li>
					<li>
						<button onClick={() => {
							setOthers(true);
							setBack(false);
							setFront(false)
							setAll(false)
						}} className="px-2 rounded-md w-24 transition-all ease-out duration-300 border border-zinc-300 hover:border-zinc-500 hover:text-zinc-500 text-zinc-300 h-8">Others</button>
					</li>
				</ul>
			</div>
			
			<div className="flex justify-center">
				<ul className="transition ease-in duration-300 flex list-none grid grid-cols-3 gap-8 sm:grid-cols-5">
					{ isAll && 
						<>
						{technologies.map((tech, index) => {
							const IconComponent = tech.icon;
							return (
							<li key={index} className="text-center">
								<div className="border rounded-full p-4">
								<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
								</div>
								<p className="text-white text-xs">{tech.name}</p>
							</li>
							);
						})}
						</>
					}
					{ isFront && 
						<>
						{frontEndTechnologies.map((tech, index) => {
							const IconComponent = tech.icon;
							return (
							<li key={index} className="text-center">
								<div className="border rounded-full p-4">
								<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
								</div>
								<p className="text-white text-xs">{tech.name}</p>
							</li>
							);
						})}
						</>
					}
					{isBack && 
						<>
							{backEndTechnologies.map((tech, index) => {
								const IconComponent = tech.icon;
								return (
								<li key={index} className="text-center">
									<div className="border rounded-full p-4">
									<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
									</div>
									<p className="text-white text-xs">{tech.name}</p>
								</li>
								);
							})}
						</>
					}
					{isOthers && (
						<>
							{otherTechnologies.map((tech, index) => {
								const IconComponent = tech.icon;
								return (
								<li key={index} className="text-center">
									<div className="border rounded-full p-4">
									<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
									</div>
									<p className="text-white text-xs">{tech.name}</p>
								</li>
								);
							})}
						</>
					)}
				</ul>
			</div>
		</div>
		
        <div className="w-full h-px bg-zinc-800" />
  	
		<div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
						
		<Particles
			className="absolute inset-0 -z-10 animate-fade-in"
			quantity={500}
		/>
			<div>
				<h2 className="text-2xl font-bold tracking-tight text-zinc-100">
					Experiences
				</h2>
			</div>

			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							GoFetch - Personal Project
						</h2>
						<p className="mt-2 text-zinc-400">
							Full Stack Developer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: React Native, Expo, NestJS, TypeScript, MongoDB, Ably, JWT.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Building a full-stack mobile marketplace platform connecting clients with task performers. Developed cross-platform mobile app with React Native, implemented secure authentication, real-time chat with Ably, and RESTful APIs with NestJS and MongoDB.
						</p>
					</div>
				</Card>
			</div>

			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							Enterprise Dashboard & CRM
						</h2>
						<p className="mt-2 text-zinc-400">
							Full Stack Developer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: Next.js 16, React 19, TypeScript, NextAuth, MongoDB, Mongoose, Ably.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Developed a comprehensive business management platform with Stripe payment integration, advanced user role management, full-featured CRM system, and real-time chat functionality using Next.js App Router and WebSocket support.
						</p>
					</div>
				</Card>
			</div>

			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							FassaDigital
						</h2>
						<ul>
							<li>

							</li>
						</ul>
						<p className="mt-2 text-zinc-400">
							Front End Engineer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: Wix Studio.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							I create websites using Wix Studio. You can explore the websites I've built with Wix Studio in the Projects section.
						</p>
					</div>
				</Card>
			</div>

			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							ILoveGolfWhen
						</h2>
						<ul>
							<li>

							</li>
						</ul>
						<p className="mt-2 text-zinc-400">
							Front End Engineer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: Wordpress, Elementor, E-commerce.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Developed pages with elementor with working E commerce, setup the payment and shipping method.
						</p>
					</div>
				</Card>
			</div>

			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							RigFab
						</h2>
						<ul>
							<li>

							</li>
						</ul>
						<p className="mt-2 text-zinc-400">
							Front End Engineer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: React, MaterialUI, TailwindCSS, Redux and MySQL.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Helped developed UI/UX for a QMS (Quality Management System) is a formalized system of processes, procedures, and responsibilities designed to ensure consistent quality in products or services
						</p>
					</div>
				</Card>
			</div>
			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							SuiteSpotTechnology
						</h2>
						<p className="mt-2 text-zinc-400 text-sm">
							Software Developer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: Angular, NodeJs, Express, MongoDB, Ionic Mobile Development.
						</p>
						<ul className="mt-2 text-zinc-400 text-sm list-disc ms-4">
							<li>
								Maintained and enhanced features and functionalities across APIs, AG Grid, forms, custom email templates, documents, and mobile applications developed with Ionic.
							</li>
							<li>
								Worked extensively on a Property Maintenance Platform, focusing on key modules like Make Ready Board, Work Orders, Inspections, Resident Management, and Reporting.
							</li>
							<li>
								Utilized RxJs for resolving and managing fetched data objects.
							</li>
							<li>
								Integrated APIs with third-party services, including HomeSpy and Yardi.
							</li>
							<li>
								Developed and maintained RESTful APIs using Node.js, Express, and MongoDB, ensuring robust and scalable back-end services.
							</li>
						</ul>
					</div>
				</Card>
			</div>
			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							BizSolutions
						</h2>
						<p className="mt-2 text-zinc-400 text-sm">
							FullStack Developer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: Angular, NodeJs, Express, MongoDB.
						</p>
						<ul className="mt-2 text-zinc-400 text-sm list-disc ms-4">
							<li>
								Developed front-end user interfaces based on Figma mockups.
							</li>
							<li>
								Created CRUD applications and implemented email confirmation functionality.	
							</li>
							<li>
								Utilized Node.js for REST API development, MongoDB for the database, and Caprover for auto-deployment.
							</li>
						</ul>
					</div>
				</Card>
			</div>
			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							bookd!
						</h2>
						<p className="mt-2 text-zinc-400 text-sm">
							Front End Developer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: AngularJS, CodeIgniter, PHP, JQuery, Ajax and MySQL.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							is a global talent booking platform designed to connect clients with talent in the entertainment industry. It provides a streamlined system for clients to search, cast, book, and pay talent through both desktop and mobile devices.
						</p>
						<ul className="mt-2 text-zinc-400 text-sm list-disc ms-4">
							<li>
								Developed pages from scratch based on mockup designs.
							</li>
							<li>
								Handled both front-end and back-end bug fixes
							</li>
							<li>
								Developed new functionalities to improve the systems structure.
							</li>
						</ul>
					</div>
				</Card>
			</div>
			<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
				<Card>
					<div className="relative w-full h-full p-4 md:p-8">
						<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
							FleetSpartan
						</h2>
						<p className="mt-2 text-zinc-400 text-sm">
							Full Stack Developer
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							Tech Stack: AngularJS, CodeIgniter, PHP, JQuery, Ajax and MySQL.
						</p>
						<p className="mt-2 text-zinc-400 text-sm">
							is a company that provides advanced fleet fuel management systems. These systems help organizations control, secure, track, and report on their fuel usage across different types of fuel storage solutions like truck-mounted, mobile, or yard tanks
						</p>
						<ul className="mt-2 text-zinc-400 text-sm list-disc ms-4">
							<li>
								Maintained a geolocation functionality using Latitude and Longitude on the truck drivers to track their locations and fuel consumptions.
							</li>
							<li>
								Maintained UI/UX, form and file handling.
							</li>
							<li>
								Handled both front-end and back-end bug fixes
							</li>
							<li>
								Developed new functionalities to improve the systems structure.
							</li>
						</ul>
					</div>
				</Card>
			</div>
		</div>

		{/* <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 h-full sm:h-[50rem]">
			<div>
				<h2 className="text-2xl font-bold tracking-tight text-zinc-100">
					Skills & Technologies
				</h2>
			</div>
			<div className="flex justify-center">
				<ul className="flex list-none space-x-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
					<li className="text-end">
						<button onClick={() => {
							setAll(true)
							setFront(false);
							setBack(false);
							setOthers(false);
						}} 
						className="bg-zinc-300 px-2 rounded-md w-24 transition-all ease-out duration-300 hover:bg-zinc-500  h-8">
							All
						</button>
					</li>
					<li>
						<button onClick={() => {
							setFront(true)
							setAll(false)
							setBack(false);
							setOthers(false);
						}} 
						className="bg-zinc-300 px-2 rounded-md w-24 transition-all ease-out duration-300 hover:bg-zinc-500  h-8">Front End</button>
					</li>
					<li>
						<button onClick={() => {
							setBack(true);
							setFront(false)
							setAll(false)
							setOthers(false);
						}} className="bg-zinc-300 px-2 rounded-md w-24 transition-all ease-out duration-300 hover:bg-zinc-500  h-8">Back End</button>
					</li>
					<li>
						<button onClick={() => {
							setOthers(true);
							setBack(false);
							setFront(false)
							setAll(false)
						}} className="bg-zinc-300 px-2 rounded-md w-24 transition-all ease-out duration-300 hover:bg-zinc-500  h-8">Others</button>
					</li>
				</ul>
			</div>
			
			<div className="flex justify-center">
				<ul className="transition ease-in duration-300 flex list-none grid grid-cols-3 gap-8 sm:grid-cols-5">
					{ isAll && 
						<>
						{technologies.map((tech, index) => {
							const IconComponent = tech.icon;
							return (
							<li key={index} className="text-center">
								<div className="border rounded-full p-4">
								<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
								</div>
								<p className="text-white text-xs">{tech.name}</p>
							</li>
							);
						})}
						</>
					}
					{ isFront && 
						<>
						{frontEndTechnologies.map((tech, index) => {
							const IconComponent = tech.icon;
							return (
							<li key={index} className="text-center">
								<div className="border rounded-full p-4">
								<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
								</div>
								<p className="text-white text-xs">{tech.name}</p>
							</li>
							);
						})}
						</>
					}
					{isBack && 
						<>
							{backEndTechnologies.map((tech, index) => {
								const IconComponent = tech.icon;
								return (
								<li key={index} className="text-center">
									<div className="border rounded-full p-4">
									<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
									</div>
									<p className="text-white text-xs">{tech.name}</p>
								</li>
								);
							})}
						</>
					}
					{isOthers && (
						<>
							{otherTechnologies.map((tech, index) => {
								const IconComponent = tech.icon;
								return (
								<li key={index} className="text-center">
									<div className="border rounded-full p-4">
									<IconComponent className="w-12 h-12 text-white transform transition-all hover:scale-125" />
									</div>
									<p className="text-white text-xs">{tech.name}</p>
								</li>
								);
							})}
						</>
					)}
				</ul>
			</div>
		</div> */}

		
        {/* <div className="w-full h-px bg-zinc-800" /> */}
		
      </div>
    </div>
	);
}


{/* <div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
<Card>
	<div className="relative w-full h-full p-4 md:p-8">
		<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
			BizSolutions
		</h2>
		<p className="mt-2 text-zinc-400 text-sm">
			FullStack Developer
		</p>
		<p className="mt-2 text-zinc-400 text-sm">
			Tech Stack: Angular, NodeJs, Express, MongoDB.
		</p>
		<ul className="mt-2 text-zinc-400 text-sm list-disc ms-4">
			<li>
				Developed front-end user interfaces based on Figma mockups.
			</li>
			<li>
				Created CRUD applications and implemented email confirmation functionality.	
			</li>
			<li>
				Utilized Node.js for REST API development, MongoDB for the database, and Caprover for auto-deployment.
			</li>
		</ul>
	</div>
</Card>
</div>
<div className="relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
<Card>
	<div className="relative w-full h-full p-4 md:p-8">
		<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
			bookd!
		</h2>
		<p className="mt-2 text-zinc-400 text-sm">
			Front End Developer
		</p>
		<p className="mt-2 text-zinc-400 text-sm">
			Tech Stack: AngularJS, CodeIgniter, PHP, JQuery, Ajax and MySQL.
		</p>
		<p className="mt-2 text-zinc-400 text-sm">
			is a global talent booking platform designed to connect clients with talent in the entertainment industry. It provides a streamlined system for clients to search, cast, book, and pay talent through both desktop and mobile devices.
		</p>
		<ul className="mt-2 text-zinc-400 text-sm list-disc ms-4">
			<li>
				Developed pages from scratch based on mockup designs.
			</li>
			<li>
				Handled both front-end and back-end bug fixes
			</li>
			<li>
				Developed new functionalities to improve the systems structure.
			</li>
		</ul>
	</div>
</Card>
</div> */}