import React from 'react';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">பயன்பாட்டு விதிமுறைகள்</h1>
      <div className="prose prose-lg max-w-3xl">
        <p className="mb-4">
          இந்த விதிமுறைகள் எங்கள் சேவைகளை பயன்படுத்துவதற்கான நிபந்தனைகளை விளக்குகின்றன.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">சேவை பயன்பாடு</h2>
        <p className="mb-4">
          எங்கள் சேவைகளை பயன்படுத்தும்போது, நீங்கள் பின்வரும் விதிமுறைகளை ஏற்றுக்கொள்கிறீர்கள்:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>வகுப்புகளில் முறையான பங்கேற்பு</li>
          <li>பாடத் திட்டத்தை பின்பற்றுதல்</li>
          <li>கட்டண கொள்கைகளை மதித்தல்</li>
        </ul>
      </div>
    </div>
  );
}