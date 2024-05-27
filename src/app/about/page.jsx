"use client";
import Link from "next/link";
import { useTheme } from '../../utils/Theme';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

export default function About() {
  const { darkTheme } = useTheme();

  return (
    <div className={`flex w-4/5 m-auto flex-col min-h-screen  pt-20 ${darkTheme ? 'text-white' : 'text-black bg-gray-100'}`}>

      <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide pt-7 text-left">
        About Me
      </h1>
      <p className="text-2xl md:text-4xl font-extrabold pt-9 ">
        Hello! I'm <span className="text-blue-600">Leonardo Yuuki Nakazone</span>
      </p>
      <p className="text-2xl md:text-4xl font-extrabold pt-9">
        A Full Stack Developer & Data Scientist from São Paulo, SP
      </p>
      <p className="text-xl md:text-2xl pt-7  max-w-4xl">
        I'm an 18-year-old tech enthusiast currently studying at FIAP. I have a passion for building interactive web applications and exploring data science. My expertise lies in technologies like React, Next.js, Firebase, SKLearn, Java and more. I love to learn new skills and continuously improve my knowledge.
      </p>


      <div className="mt-auto text-center pb-24">
        <nav className="flex items-center justify-center gap-5 pb-4">
          <Link href="https://github.com/leoleoyuuki" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <FaGithub size={35} className="hover:text-blue-400 transition-colors duration-200" />
          </Link>

          <Link href="https://github.com/leoleoyuuki/portfolio/blob/main/public/curriculo.pdf" target="_blank" rel="noopener noreferrer" aria-label="Curriculum">
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
