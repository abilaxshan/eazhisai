import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", animate = true, color = "#ffa726" }) => {
  return (
    <motion.div 
      className={`${className}`}
      initial={animate ? { scale: 0.95, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.5 }}
    >
      <svg viewBox="0 0 1200 1200" className="w-full h-full">
        {/* Outer circle with text */}
        <defs>
          <path id="circlePath" d="M600,100 A500,500 0 1,1 600,1100 A500,500 0 1,1 600,100" fill="none"/>
        </defs>
        
        {/* Shield background */}
        <path 
          d="M600 200L900 350V600C900 800 800 950 600 1050C400 950 300 800 300 600V350L600 200Z" 
          fill={color} 
          fillOpacity="0.1"
          stroke={color}
          strokeWidth="10"
        />

        {/* Decorative leaves */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 600 600)`}>
            <path
              d="M850 600C900 550 900 450 850 400C900 450 900 550 850 600Z"
              fill={color}
            />
          </g>
        ))}

        {/* Crown at top */}
        <path
          d="M500 300L600 250L700 300L650 350H550L500 300Z"
          fill={color}
        />

        {/* Musician figure */}
        <g transform="translate(450 400)">
          <path
            d="M150 200C200 150 250 150 300 200C250 250 200 250 150 200Z M180 180H270M150 150C200 100 250 100 300 150"
            stroke={color}
            strokeWidth="8"
            fill="none"
          />
          {/* Musical instruments */}
          <path
            d="M160 220L240 180M260 220L180 180"
            stroke={color}
            strokeWidth="6"
            fill="none"
          />
        </g>

        {/* Text paths */}
        <text fill={color} fontSize="48">
          <textPath href="#circlePath" startOffset="25%">
            EAZHISAI ARTS COLLEGE
          </textPath>
        </text>
        
        {/* Bottom text */}
        <text
          x="600"
          y="1100"
          fill={color}
          fontSize="48"
          textAnchor="middle"
          fontWeight="bold"
        >
          BE WITH MUSIC
        </text>
      </svg>
    </motion.div>
  );
};

export default Logo;