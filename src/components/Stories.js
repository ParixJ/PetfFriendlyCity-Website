import React from 'react';
import { motion } from 'framer-motion';
import './Stories.css';

const stories = [
  {
    id: 1,
    title: "The Park That Changed Everything",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    excerpt: "When a group of dog owners came together to transform an abandoned lot into a vibrant dog park, they didn't just create a space for pets - they built a community hub that brought neighbors together and revitalized the entire neighborhood."
  },
  {
    id: 2,
    title: "Paws for Healing",
    author: "Michael Chen",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Meet Max, the therapy dog who visits local hospitals and schools, bringing joy and comfort to patients and students. His impact has inspired the city to launch a new therapy animal program."
  },
  {
    id: 3,
    title: "From Strangers to Family",
    author: "Emma Rodriguez",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    excerpt: "How a weekly dog walking group turned a group of strangers into a tight-knit community, leading to new friendships, business partnerships, and even a neighborhood watch program."
  }
];

const Stories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="stories-page">
      <motion.div 
        className="stories-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Inspiring Pet Stories</h1>
        <p>Real stories of how pets are making our cities better places to live</p>
      </motion.div>

      <motion.div 
        className="stories-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stories.map((story) => (
          <motion.article 
            key={story.id} 
            className="story-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="story-image">
              <img src={story.image} alt={story.title} />
            </div>
            <div className="story-content">
              <h2>{story.title}</h2>
              <p className="story-meta">By {story.author} | {story.date}</p>
              <p className="story-excerpt">{story.excerpt}</p>
              <motion.button 
                className="read-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Story
              </motion.button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div 
        className="share-story-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2>Share Your Story</h2>
        <p>Have an inspiring story about how pets have made your city better? We'd love to hear it!</p>
        <motion.button 
          className="share-story-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Your Story
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Stories; 