import React from 'react';
import Events from '../components/Events';

export default function EventsPage(){
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">நிகழ்வுகள்</h1>
      <Events />
    </div>
  );
}
