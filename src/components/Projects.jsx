import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce platform built with Django, featuring a product catalog, secure payments, and user account management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Rahul190556/Django-E-commerce-Website',
    live: 'https://rahul620607.pythonanywhere.com/',
    technologies: ['Django', 'JavaScript', 'AJAX', 'CSS', 'HTML', 'Database Management']
  },
  {
    title: 'Collaborative Event Management',
    description: 'Platform for personalized event suggestions using machine learning based on user preferences and history.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Rahul190556/College_Event',
    technologies: ['Web Development', 'Machine Learning', 'Scikit-learn']
  },
  {
    title: 'Airline Reservation System',
    description: 'Comprehensive airline reservation system with C++ and file handling, featuring customer registration, flight selection, and ticket generation.',
    image: 'https://cdn.pixabay.com/photo/2017/09/21/23/19/jet-2773878_1280.jpg',
    github: 'https://github.com/Rahul190556/Airline_Reservation',
    technologies: ['C++', 'File Handling', 'OOPS']
  },
  {
    title: 'Bank Customer Churn Prediction',
    description: 'Machine learning model using Support Vector Classifier (SVC) to predict bank customer churn with 92% accuracy.',
    image: 'https://mavenanalyticsio-upload-bucket-prod.s3.us-west-2.amazonaws.com/207998258/projects/1fbb3012-cf95-4463-af07-e5a70df0e4d9.jpg',
    github: 'https://github.com/Rahul190556/Bank-Customer-Churn-Analysis',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn']
  },
  {
    title: 'Multi-PDF Chatbot',
    description: 'Multi-PDF chatbot using LlamaCpp for analyzing and comparing PDF documents with 90%+ retrieval accuracy.',
    image: 'https://i.ytimg.com/vi/dXxQ0LR-3Hg/sddefault.jpg',
    github: 'https://github.com/Rahul190556/Content_Engine',
    technologies: ['Python', 'LlamaCpp', 'LangChain', 'FAISS', 'Streamlit']
  },
  {
    title: 'Blog Platform',
    description: 'Developed a full-stack blog platform with features like user authentication, post creation, editing, and comments.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1QzjsNiAbYVPlR7QX5HqPsVAby1H6zeBrA&s',
    github: 'https://github.com/Rahul190556/Blog-Website',
    live: 'https://yourblogplatform.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Django']
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-all duration-100 ${
                index === currentIndex ? 'scale-105' : 'scale-100'
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
