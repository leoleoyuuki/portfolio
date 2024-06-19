"use client";
import Link from "next/link";
import { useTheme } from '../../utils/Theme';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import Image from "next/image";

export default function About() {
  const { darkTheme } = useTheme();

  return (
    <div className={` ${darkTheme ? 'text-white' : 'text-black bg-gray-100'}`}>
      <div className={`flex w-4/5 m-auto flex-col min-h-screen pt-14 ${darkTheme ? 'text-white' : 'text-black bg-gray-100'}`}>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide pt-7 text-left">
          Sobre Mim
        </h1>
        <p className="text-2xl md:text-4xl font-extrabold pt-9 ">
          Olá! Eu sou <span className="text-blue-600">Leonardo Yuuki Nakazone</span>
        </p>
        <p className="text-2xl md:text-4xl font-extrabold pt-9">
          Dev Full Stack & Cientista de Dados de São Paulo, SP
        </p>
        <p className="text-xl md:text-2xl pt-7 max-w-4xl">
          Tenho 18 anos, sou um entusiasta de tecnologia e atualmente estudo na FIAP. Tenho paixão por construir aplicações web interativas e explorar ciência de dados. Minha expertise está em tecnologias como React, Next.js, Firebase, SKLearn, Java e mais. Adoro aprender novas habilidades e melhorar continuamente meu conhecimento. <span className="font-extrabold text-blue-500">Disponível para trabalho e freelances</span>. Você pode verificar minhas habilidades no GitHub, LinkedIn e ver meu currículo para saber mais sobre mim e meus projetos.
        </p>

        {/* Seção de Projetos */}
        <section className="pt-14">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-left">
            Meus Projetos
          </h2>
          <div className="flex flex-wrap justify-between pt-10">
            {projects.map((project, index) => (
              <div key={index} className={`flex flex-col w-full md:w-5/12 ${darkTheme ? 'bg-gray-800' : 'bg-white'} p-5 px-10 rounded-lg shadow-lg`}>
                <div>
                  <Image se src={project.imageUrl} width={500} height={200} alt={project.title} className="w-full h-auto rounded-lg" />
                </div>
                <div className="pt-5">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-lg pt-5">{project.description}</p>
                  <div className="flex gap-5 pt-5">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Repositório do ${project.title}`}>
                      <FaGithub size={35} className="hover:text-blue-400 transition-colors duration-200" />
                    </Link>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-auto text-center pt-24">
          <nav className="flex items-center justify-center gap-5 pb-4">
            <Link href="https://github.com/leoleoyuuki" target="_blank" rel="noopener noreferrer" aria-label="Perfil no GitHub">
              <FaGithub size={35} className="hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <Link href="https://github.com/leoleoyuuki/portfolio/blob/main/public/curriculo.pdf" target="_blank" rel="noopener noreferrer" aria-label="Currículo">
              <IoDocumentTextSharp size={35} className="hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/leonardo-yuuki-nakazone-22a962295/" target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn">
              <FaLinkedin size={35} className="hover:text-blue-400 transition-colors duration-200" />
            </Link>
          </nav>
          <p>&copy; 2024 - Leo Yuuki</p>
          <p>
            desenvolvido com
            <Link className={`text-blue-600 hover:text-blue-800 transition-colors duration-200`} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Next.js">
              &nbsp;Next.js&nbsp;
            </Link>
            - Hospedado na
            <Link className={`text-blue-600 hover:text-blue-800 transition-colors duration-200`} href="https://vercel.com/" target="_blank" rel="noopener noreferrer" aria-label="Vercel">
              &nbsp;Vercel&nbsp;
            </Link>
            - Código no
            <Link className={`text-blue-600 hover:text-blue-800 transition-colors duration-200`} href="https://github.com/portfolio" target="_blank" rel="noopener noreferrer" aria-label="Github">
              &nbsp;Github&nbsp;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "BoostSync",
    description: " O site é basicamente um SaaS que fornece o download de um programa de otimização do computador para jogos e vende a licença para utilização do programa ",
    imageUrl: "/public/img/boostsync.png", // substitua pelo caminho real da imagem
    repoUrl: "https://github.com/leoleoyuuki/BoostSync",
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2. Este projeto utiliza Next.js e SKLearn para análise de dados.",
    imageUrl: "/public/img/boostsync.png", // substitua pelo caminho real da imagem
    repoUrl: "https://github.com/leoleoyuuki/projeto2",
  },
];
