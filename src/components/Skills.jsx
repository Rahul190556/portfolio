import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skillsData.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;