import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const data = {
    labels: ['LeetCode Problems', 'GFG Problems', 'Codeforces(Pupil)'],
    datasets: [
      {
        label: 'Problem Solved',
        data: [350, 250, 100],
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
        hoverBackgroundColor: ['#81c784', '#ffb74d', '#64b5f6'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      duration: isVisible ? 2000 : 0, // Animation only when visible
      easing: 'easeInOutBounce', // Dynamic easing effect
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#374151',
          font: { size: 14 },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#555',
        borderWidth: 1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Achievements
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Chart Section */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Pie data={data} options={options} />
            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                A breakdown of achievements showcasing problem-solving skills across platforms.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Includes data from LeetCode, GeeksforGeeks, and Codeforces.
              </p>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6 md:w-1/2 lg:w-1/3">
            {[
              {
                title: 'LeetCode',
                description:
                  'Solved 350+ problems and ranked 749 out of 38,868+ candidates in global contests.',
                color: 'bg-green-500',
                percentage: 98, // Display 98%
                text: 'Top 2%',
              },
              {
                title: 'GeeksforGeeks',
                description:
                  'Solved 250+ problems and ranked in the top 5.4% out of 50,000+ candidates.',
                color: 'bg-yellow-500',
                percentage: 94.6, // Display 94.6%
                text: 'Top 5.4%',
              },
              {
                title: 'Codeforces',
                description:
                  'Achieved the rank of Pupil, placing in the top 15% of 25,000+ candidates.',
                color: 'bg-blue-500',
                percentage: 85, // Display 85%
                text: 'Top 15%',
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold dark:text-white">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4 relative">
                  <div
                    className={`${achievement.color} h-2.5 rounded-full`}
                    style={{
                      width: isVisible ? `${achievement.percentage}%` : '0%',
                      transition: 'width 1.5s ease-in-out',
                    }}
                  ></div>
                  <span
                    className="absolute right-0 top-[-1.5rem] text-sm font-semibold text-gray-600 dark:text-gray-400"
                    style={{
                      transition: 'opacity 1.5s ease-in-out',
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {achievement.text}
                  </span>
                </div>
                <p className="text-sm mt-2 dark:text-gray-400">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
