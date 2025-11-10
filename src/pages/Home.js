import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Events from '../components/Events';
import Team from '../components/Team';

export default function Home(){
  return (
    <main className="flex-grow">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Features />
        <div className="mt-6">
          <Courses />
          <Events />
        </div>
        <Team />
      </div>
    </main>
  );
}
