"use client";
import Link from "next/link";
import { useTheme } from "../utils/Theme";
import { FaWhatsapp, FaCar, FaRocket, FaUsers } from "react-icons/fa";
import { Dumbbell } from "lucide-react";

const AtelierIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7.7 7.7 2 22" />
    <path d="M17.7 17.7 22 12l-4-4-3 3-4-4-3 3-4-4-4 4 4 4Z" />
    <path d="m14 6 3 3" />
    <path d="M22 2 12 12" />
  </svg>
);

const BeautyIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5.2c2.4 0 4.7.9 6.5 2.5" />
    <path d="M12 5.2C9.6 5.2 7.3 6.1 5.5 7.7" />
    <path d="M18.5 10.2C20.1 12 21 14.4 21 17" />
    <path d="M5.5 10.2C3.9 12 3 14.4 3 17" />
    <path d="M12 10.2c-2.4 0-4.7.9-6.5 2.5" />
    <path d="M12 10.2c2.4 0 4.7.9 6.5 2.5" />
    <path d="M12 15.2c-2.4 0-4.7.9-6.5 2.5" />
    <path d="M12 15.2c2.4 0 4.7.9 6.5 2.5" />
    <path d="M12 21a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2.2.2 0 0 0-.2.2v2.6a.2.2 0 0 0 .2.2z" />
  </svg>
);
import { useState } from "react";

const SystemLink = ({ name, description, link, icon: Icon, gradient, bgColor }) => {
  const { darkTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} legacyBehavior>
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative overflow-hidden w-full p-5 rounded-2xl transition-all duration-300 ${
          darkTheme
            ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800/80 hover:to-gray-900/80 backdrop-blur-sm border border-gray-700/50"
            : "bg-white hover:shadow-xl border border-gray-200"
        } ${isHovered ? 'scale-[1.02] shadow-2xl' : 'shadow-md'}`}
        style={{
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Gradient overlay on hover */}
        {gradient && (
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${gradient}`}
          />
        )}
        
        <div className="relative flex items-center gap-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
              gradient ? `bg-gradient-to-br ${gradient}` : ''
            }`}
            style={bgColor ? { backgroundColor: bgColor } : {}}
          >
            <Icon className="text-white text-xl" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-bold mb-1 ${
                darkTheme ? "text-white" : "text-gray-900"
              }`}
            >
              {name}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                darkTheme ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          </div>
          
          <div className={`flex-shrink-0 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
            <svg
              className={`w-6 h-6 ${darkTheme ? "text-gray-600" : "text-gray-400"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};

const ActionButton = ({ href, children, icon: Icon, variant = "primary" }) => {
  const { darkTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: darkTheme
      ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400"
      : "bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500",
    secondary: darkTheme
      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",

    button: darkTheme
      ? "bg-gradient-to-r from-blue-500 to-gray-400 hover:from-blue-400 hover:to-gray-300"
      : "bg-gradient-to-r from-gray-400 to-blue-500 hover:from-gray-500 hover:to-blue-600",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 p-4 text-white font-semibold text-center rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl ${
        variants[variant]
      } ${isHovered ? 'scale-[1.02] -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={22} />
      <span>{children}</span>
    </Link>
  );
};

export default function Home() {
  const { darkTheme } = useTheme();

  const systems = [
    {
      name: "AtelierFlow",
      description: "Gerencie faturamento, pedidos, clientes e tarefas do seu ateliê. Pare de fazer o trabalho chato.",
      link: "https://crm-atelie.vercel.app/",
      icon: AtelierIcon,
      bgColor: "#B55B3C",
    },
    {
      name: "BeautyFlow",
      description: "Gerencie seu faturamento, clientes e procedimentos na área da beleza. Aumente seu faturamento recorrente.",
      link: "https://beautyflowerp.vercel.app/",
      icon: BeautyIcon,
      bgColor: "#C266FF",
    },
    {
      name: "Fitflow",
      description: "IA para academias criarem e gerenciarem os treinos de seus alunos. Retenha mais alunos na sua academia.",
      link: "https://www.fitflowpro.com.br/",
      icon: Dumbbell,
      bgColor: "#3F51B5",
    },
    
    {
      name: "AutoEstetica",
      description: "Gerencie o faturamento e clientes em estéticas automotivas. Aumente seu faturamento recorrente.",
      link: "https://crmautoestetica.netlify.app/",
      icon: FaCar,
      bgColor: "#8B5CF6",
    },
  ];

  return (
    <div
      className={`min-h-screen py-6 px-4 transition-colors duration-300 ${
        darkTheme
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mt-8 animate-fade-in">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
              darkTheme ? "bg-blue-500" : "bg-blue-400"
            }`} />
            <img
              src="/img/eu.png"
              alt="Leo Yuuki's Hub Logo"
              className="relative w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
            />
          </div>
          
          <div className="text-center space-y-2">
            <h1
              className={`text-3xl font-bold bg-gradient-to-r ${
                darkTheme
                  ? "from-blue-400 to-blue-600"
                  : "from-blue-600 to-blue-400"
              } bg-clip-text text-transparent`}
            >
              Leo Yuuki's Hub
            </h1>
            <p className={`text-sm ${darkTheme ? "text-gray-400" : "text-gray-600"}`}>
              Soluções tecnológicas para seu negócio crescer
            </p>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="flex flex-col gap-4 w-full px-2">
          {systems.map((system, index) => (
            <div
              key={system.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SystemLink {...system} />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full mt-4 px-2">
          <ActionButton href="https://wa.me/5511957211546?text=Ol%C3%A1,%20quero%20criar%20um%20sistema%20para%20minha%20empresa%20%F0%9F%98%81" icon={FaRocket} variant="button">
            Desenvolver um sistema para minha empresa
          </ActionButton>
          <ActionButton href="https://wa.me/5511957211546?text=Ol%C3%A1,%20quero%20me%20tornar%20vendedor%20de%20um%20dos%20sistemas%20%F0%9F%98%81" icon={FaUsers} variant="secondary">
            Seja um vendedor
          </ActionButton>
        </div>

        {/* Footer */}
        <div className={`text-center text-sm mt-8 mb-4 ${
          darkTheme ? "text-gray-500" : "text-gray-400"
        }`}>
          <p>Desenvolvimento de sistemas Inteligentes.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}