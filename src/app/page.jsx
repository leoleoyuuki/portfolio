"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white items-center pt-44">
      <Link href="about" className="underline">
        Who Am I ?
      </Link>
      <h1 className="text-8xl font-extrabold tracking-wide pt-7">
        Hi👋, I'm <span className=" text-blue-600">Leo Yuuki</span>
      </h1>
      <p className="text-4xl font-extrabold pt-9">
        Full Stack Developer who likes to play with
      </p>
      <p className="text-4xl font-extrabold tracking-wide text-blue-600 pt-2">
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

      <div className="fixed mt-[350px] text-center ">
        <p>&copy; 2024 - Leo Yuuki</p>
        <p>
          built with 
          <Link className="text-blue-600" href={"https://nextjs.org/"}>
          &nbsp;Next.js&nbsp;
          </Link>
          - Hosted on 
          <Link className="text-blue-600" href={"https://vercel.com/"}>
          &nbsp;Vercel&nbsp;
          </Link>
          - Code on 
          <Link className="text-blue-600" href={"https://github.com/portfolio"}>
          &nbsp;Github&nbsp;
          </Link>
        </p>

        <nav className="flex items-center justify-center gap-5 pt-4">
          <Link href={"https://github.com/leoleoyuuki"}>
            <FaGithub size={35} />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/leonardo-yuuki-nakazone-22a962295/"
            }
          >
            <FaLinkedin size={35} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
