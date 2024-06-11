import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaPython, FaPhp, FaJava } from "react-icons/fa"; // Importing icons
import { SiTailwindcss, SiNextdotjs, SiMysql, SiTypescript, SiPostgresql, SiMongodb, SiDjango, SiLaravel, SiFlutter, SiSwift, SiKotlin } from 'react-icons/si'; // Importing icons

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const technologies = [
  { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-red-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl text-purple-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-blue-400" /> },
  { name: 'Kotlin', icon: <SiKotlin className="text-4xl text-purple-700" /> },
  { name: 'Python', icon: <FaPython className="text-4xl text-blue-500" /> },
  { name: 'Laravel', icon: <SiLaravel className="text-4xl text-red-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" /> },
  { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-4xl text-indigo-500" /> },
  { name: 'Java', icon: <FaJava className="text-4xl text-red-600" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-400" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Annisa Urohmah
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in mx-16">
        <h2 className="text-sm text-zinc-500 ">
          UI UX Designer | Web Developer | Software Engineer
        </h2>
      </div>

      <div className="my-16 text-center animate-fade-in mx-16">
        <h2 className="text-lg text-zinc-500 mb-8">Technologies I Use</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-zinc-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    

  );
}
