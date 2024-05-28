"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from '../utils/Theme';
import { IoDocumentTextSharp } from "react-icons/io5";

export default function Home() {
  const { darkTheme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen items-center pt-44 ${darkTheme ? 'text-white' : 'text-black bg-gray-100'}`}>
      <Link href="/about" className={`underline ${darkTheme ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-200`} aria-label="About me">
        Who Am I?
      </Link>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide pt-7 text-center">
        Hi👋, I&apos;m <span className="text-blue-600">Leo Yuuki</span>
      </h1>
      <p className="text-2xl md:text-4xl font-extrabold pt-9 text-center">
        Full Stack Developer who likes to build stuff with
      </p>
      <p translate="no" className="text-2xl md:text-4xl font-extrabold tracking-wide text-blue-600 pt-2 text-center">
        <Typewriter
          loop={0}
          words={[
            "React",
            "Next.Js",
            "Firebase",
            "React Native",
            "Node.Js",
            ".NET",
            "Oracle PL/SQL",
            "Python",
            "ScikitLearn",
            "Java",
            "Spring",
            "Javascript",
          ]}
        />
      </p>

      <div className="mt-auto text-center pb-24">
      <nav className="flex items-center justify-center gap-5 pb-4">
          <Link href="https://github.com/leoleoyuuki" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <FaGithub size={35} className="hover:text-blue-400 transition-colors duration-200" />
          </Link>

          <Link href="https://github.com/leoleoyuuki/portfolio/blob/main/public/curriculo.pdf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <IoDocumentTextSharp size={35} className="hover:text-blue-400 transition-colors duration-200" />

          </Link>

          <Link href="https://www.linkedin.com/in/leonardo-yuuki-nakazone-22a962295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <FaLinkedin size={35} className="hover:text-blue-400 transition-colors duration-200" />
          </Link>
        </nav>
        <p>&copy; 2024 - Leo Yuuki</p>
        <p>
          built with 
          <Link className={`text-blue-600 hover:text-blue-800 transition-colors duration-200`} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Next.js">
            &nbsp;Next.js&nbsp;
          </Link>
          - Hosted on 
          <Link className={`text-blue-600 hover:text-blue-800 transition-colors duration-200`} href="https://vercel.com/" target="_blank" rel="noopener noreferrer" aria-label="Vercel">
            &nbsp;Vercel&nbsp;
          </Link>
          - Code on 
          <Link className={`text-blue-600 hover:text-blue-800 transition-colors duration-200`} href="https://github.com/portfolio" target="_blank" rel="noopener noreferrer" aria-label="Github">
            &nbsp;Github&nbsp;
          </Link>
        </p>

        
      </div>
    </div>
  );
}
