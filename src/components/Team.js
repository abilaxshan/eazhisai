import React from 'react';
import { motion } from "framer-motion";

import TeamCard from './TeamCard';
import teacher1 from '../assets/team/whitekalyan.jpeg';
import teacher2 from '../assets/team/teacher playing violin.png';
import teacher3 from '../assets/team/singsong.jpeg';

const teamMembers = [
  {
    name: "கல்யாண்சரண் மாஸ்டர்",
    role: "இசை ஆசிரியர்",
    instrument: "வீணை",
    bio: "30 ஆண்டுகள் அனுபவம். பல மாணவர்களை சிறந்த கலைஞர்களாக உருவாக்கியவர்.",
    image: teacher1,
  },
  {
    name: "கல்யாண்சரண்",
    role: "பாட்டு ஆசிரியை",
    instrument: "கர்நாடக வோகல்",
    bio: "15 ஆண்டுகள் கற்பித்தல் அனுபவம். பல விருதுகள் பெற்றவர்.",
    image: teacher2,
  },
  {
    name: "கல்யாண்சரண்",
    role: "இசை ஆசிரியர்",
    instrument: "மிருதங்கம்",
    bio: "20 ஆண்டுகள் அனுபவம். பாரம்பரிய முறையில் கற்பிப்பவர்.",
    image: teacher3,
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Roboto Slab', serif" }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            எங்கள் குழு 🎶
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            கர்நாடக இசையின் பாரம்பரியத்தையும், அதன் அழகிய நுணுக்கங்களையும் உலகளவில் 
            பரப்ப விழைகின்றோம். அனுபவம் வாய்ந்த கலைஞர்கள் மற்றும் ஆசிரியர்கள் இணைந்து, 
            மாணவர்களுக்கு சிறந்த இசைக் கல்வியையும், மேடை அனுபவத்தையும் வழங்குகிறோம்.
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
