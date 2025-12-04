'use client';

import { User } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  image?: string;
}

interface TeamCategory {
  title: string;
  members: TeamMember[];
}

export default function TeamSection() {
  const teamStructure: TeamCategory[] = [
    {
      title: 'CL',
      members: [
        { name: 'Shree Pillay', image: '/team/shree pillay.jpg' },
        { name: 'Aahna Redkar', image: '/team/Aahna Redkar.jpg' },
      ],
    },
    {
      title: 'ACL',
      members: [
        { name: 'Gaurang Thakur', image: '/team/Gaurang Thakur.jpg' },
        { name: 'Sanskruti Sawant', image: '/team/Sankruti Sawant.jpg' },
      ],
    },
    {
      title: 'Registration Head',
      members: [
        { name: 'Ajay Prajapati', image: '/team/Ajay Prajapati.jpg' },
        { name: 'Jyoti Bhaskar', image: '/team/Jyoti Bhaskar.jpg' },
      ],
    },
    {
      title: 'Events Head',
      members: [
        { name: 'Pratham Shinde', image: '/team/Pratham Shinde.jpg' },
        { name: 'Bhoomika karki', image: '/team/Bhoomika karki.jpg' },
      ],
    },
    {
      title: 'Marketing Head',
      members: [
        { name: 'Rupam Chorghe', image: '/team/Rupam Chorghe.jpg' },
        { name: 'Rutva Kagdada', image: '/team/Rutva Kagdada.jpg' },
        { name: 'Shankar Lohatkar', image: '/team/Shankar Lohatkar.jpg' },
      ],
    },
    {
      title: 'Creative Head',
      members: [
        { name: 'Shubham Divekar', image: '/team/Shubham Divekar.jpg' },
        { name: 'Disha Sawant', image: '/team/Disha Sawant.jpg' },
        { name: 'Devarsh Mohite', image: '/team/Devarsh Mohite.jpg' },
      ],
    },
    {
      title: 'PR Head',
      members: [
        { name: 'Surbhi Thakur', image: '/team/Surbhi Thakur.jpg' },
        { name: 'Maitrayee Gawde', image: '/team/Maitrayee Gawde.jpg' },
      ],
    },
    {
      title: 'Social Media Head',
      members: [
        { name: 'Tanmay Mane', image: '/team/Tanmay Mane .jpg' },
        { name: 'Adarsh Umbarsada', image: '/team/Adarsh Umbarsada.jpg' },
      ],
    },
    {
      title: 'Operations and Logistics Head',
      members: [
        { name: 'Aareen Yadav', image: '/team/Aareen Yadav.jpg' },
        { name: 'Ishwari Agaskar', image: '/team/Ishwari Agaskar.jpg' },
        { name: 'Mandar Sood', image: '/team/Mandar Sood.jpg' },
        { name: 'Yash Amate', image: '/team/Yash Amate.jpg' },
      ],
    },
    {
      title: 'Cultural Head',
      members: [
        { name: 'Praveen', image: '/team/Praveen.jpg' },
      ],
    },
    {
      title: 'Special Contributors',
      members: [
        { name: 'Bhavesh Gamare', image: '/team/Bhavesh Gamare.jpg' },
        { name: 'Prathmesh Jadhav', image: '/team/Prathmesh Jadhav.jpg' },
        { name: 'Tanmay Gawankar', image: '/team/Tanmay Gawankar.jpg' },
        { name: 'Piyush Bhosale', image: '/team/Piyush Bhosale.jpg' },
      ],
    },
  ];

  return (
    <section id="team" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text"
            style={{
              textShadow: '0 0 30px rgba(255, 87, 34, 0.6)',
            } as React.CSSProperties}
          >
            Our Team
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Meet the passionate team behind Ubuntu 2025
          </p>
        </div>



        {/* Team Categories */}
        <div className="space-y-16 relative z-10">
          {teamStructure.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
                {category.title}
              </h3>

              {/* Members Grid */}
              <div className={`flex flex-wrap justify-center gap-x-12 gap-y-12 ${category.members.length === 4 ? 'max-w-7xl mx-auto' : category.members.length === 3 ? 'max-w-5xl mx-auto' : 'max-w-4xl mx-auto'}`}>
                {category.members.map((member, memberIndex) => (
                  <div
                    key={`${category.title}-${memberIndex}`}
                    className="group flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
                  >
                    {/* Image Card */}
                    <div className="glass-effect-strong rounded-2xl p-8 border-2 border-white/20 hover:border-fire-500/60 transition-colors duration-300 relative overflow-hidden mb-5">
                      {/* Team Member Image */}
                      <div className="w-56 h-56 rounded-xl bg-gradient-to-br from-fire-500/30 to-water-500/30 flex items-center justify-center relative overflow-hidden">
                        {member.image ? (
                          <Image 
                            src={member.image} 
                            alt={member.name}
                            width={224}
                            height={224}
                            className="w-full h-full object-cover rounded-xl"
                            loading="lazy"
                            quality={75}
                          />
                        ) : (
                          <User className="w-28 h-28 text-white/40" />
                        )}
                        
                        {/* Static Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fire-500/20 to-transparent opacity-40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Member Name */}
                    <p className="text-lg font-semibold text-white text-center">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
