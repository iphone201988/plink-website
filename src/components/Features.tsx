import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Map, MessageCircle, CheckSquare } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Create & Join Groups",
      description: "Create private or public groups, invite friends, and manage who plays in your matches."
    },
    {
      icon: <Calendar size={32} />,
      title: "Smart Scheduling",
      description: "Schedule games, get reminders, and automatically fill empty slots from your waitlist."
    },
    {
      icon: <Map size={32} />,
      title: "Find Courts Nearby",
      description: "Discover available courts in your area with our interactive map and navigation."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "In-App Messaging",
      description: "Chat with friends, coordinate games, and stay connected with instant messaging."
    },
    {
      icon: <CheckSquare size={32} />,
      title: "RSVP Management",
      description: "Automated confirmation system ensures you always have enough players for your games."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-[#f6f5f8]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features That Make <span className="text-[#0593fe]">Plink</span> Special
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to organize and manage your sports activities in one place.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="bg-[#0593fe] text-white text-lg font-medium py-3 px-8 rounded-full hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;