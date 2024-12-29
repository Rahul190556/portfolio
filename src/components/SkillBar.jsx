import React from 'react';

const SkillBar = ({ name, level, inView }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
      <div className="flex justify-between mb-2">
        <span className="font-medium dark:text-white">{name}</span>
        <span className="text-blue-600 dark:text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 overflow-hidden">
        <div
          className="h-2.5 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-blue-600"
          style={{ 
            width: inView ? `${level}%` : '0%',
            transition: 'width 1s ease-out'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;