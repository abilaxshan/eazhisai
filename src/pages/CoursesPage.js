import React from 'react';
import Courses from '../components/Courses';

export default function CoursesPage(){
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">படிப்புகள்</h1>
      <Courses />
    </div>
  );
}
