"use client"
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'


export default function Home() {


  return (
      <div className="flex flex-col min-h-screen text-white items-center pt-44">
        <Link href="about" className='underline'>Who Am I ?</Link>
        <h1 className='text-8xl font-extrabold tracking-wide pt-7'>Hi👋, I'm <span className=' text-blue-600'>Leo Yuuki</span></h1>
        <p className='text-4xl font-extrabold pt-9'>Full Stack Developer who likes to play with</p>
        <p className='text-4xl font-extrabold tracking-wide text-blue-600 pt-2'>
          <Typewriter loop={0} words={['React','Next.Js', 'Firebase', 'React Native', 'Node.Js', '.NET', 'Oracle PL/SQL','Python', 'ScikitLearn','Java', 'Spring','Javascript' ]}  />
        </p>

        <p>&copy; 2024 - Leo Yuuki</p>
        <p>built with <Link href={'https://nextjs.org/'}>Next.js</Link> - Hosted on <Link href={'https://vercel.com/'}>Vercel</Link> code on <Link href={'https://github.com/'}>Github</Link></p>
      </div>
  );
}
