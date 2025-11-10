import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">தனியுரிமைக் கொள்கை</h1>
      <div className="prose prose-lg max-w-3xl">
        <p className="mb-4">
          இந்த தனியுரிமைக் கொள்கை எங்கள் வலைத்தளத்தில் தங்கள் தனிப்பட்ட தகவல்களை எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை விளக்குகிறது.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">தகவல் சேகரிப்பு</h2>
        <p className="mb-4">
          நாங்கள் பின்வரும் தகவல்களை சேகரிக்கலாம்:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>பெயர் மற்றும் தொடர்பு விவரங்கள்</li>
          <li>மின்னஞ்சல் முகவரி</li>
          <li>தொலைபேசி எண்</li>
        </ul>
      </div>
    </div>
  );
}