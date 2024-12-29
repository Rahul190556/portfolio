import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group hover:scale-105 transition-transform duration-500 ease-out">
      <div className="relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
          <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white transition-colors duration-300 group-hover:text-blue-500">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-opacity duration-300 group-hover:opacity-80">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 transition-transform duration-300 ease-in-out group-hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <Github className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
              <span className="transition-transform group-hover:translate-x-1">Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <ExternalLink className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
              <span className="transition-transform group-hover:translate-x-1">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
