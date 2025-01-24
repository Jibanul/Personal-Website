import React from 'react';
import SkillLevelIcon from './SkillLevelIcons';

const SkillLevelDemo: React.FC = () => {
  const levels = [
    { name: 'Novice', level: 'novice' as const, description: 'Basic understanding of core concepts' },
    { name: 'Beginner', level: 'beginner' as const, description: 'Can work with guidance and documentation' },
    { name: 'Intermediate', level: 'intermediate' as const, description: 'Independent work on standard tasks' },
    { name: 'Advanced', level: 'advanced' as const, description: 'Deep knowledge and problem-solving ability' },
    { name: 'Expert', level: 'expert' as const, description: 'Mastery with innovative contributions' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Skill Level Indicators</h2>
      <div className="space-y-4">
        {levels.map(({ name, level, description }) => (
          <div key={level} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
            <SkillLevelIcon 
              level={level} 
              size={32} 
              className="text-blue-600" 
            />
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillLevelDemo;