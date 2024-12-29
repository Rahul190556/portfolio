import React from 'react';
import { Github, Linkedin, Code, BookOpen, Download } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Rahul190556',
      color: 'hover:text-purple-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/rahul-kumar-7400ba228',
      color: 'hover:text-blue-500'
    },
    {
      name: 'LeetCode',
      icon: <Code className="w-5 h-5" />,
      url: 'https://leetcode.com/u/rahul190556/',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'CodeForces',
      icon: <BookOpen className="w-5 h-5" />,
      url: 'https://codeforces.com/profile/rahulshamr620607',
      color: 'hover:text-green-500'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Code className="w-5 h-5" />,
      url: 'https://www.geeksforgeeks.org/user/rahulshamr190556/',
      color: 'hover:text-emerald-500'
    }
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4 bg-white dark:bg-gray-600 p-3 rounded-r-lg shadow-lg">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition-all duration-200 ${link.color} hover:scale-110`}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1jaeh_TL0QmyzZgZp8JI5gUFDYIxF7W0A/view?usp=drivesdk"
          download
          className="transform transition-all duration-200 hover:text-blue-500 hover:scale-110"
          aria-label="Download Resume"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;