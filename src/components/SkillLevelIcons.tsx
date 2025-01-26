import React from 'react';

interface SkillLevelIconProps {
  level: 'novice' | 'beginner' | 'intermediate' | 'advanced' | 'expert';
  size?: number;
  className?: string;
}

const SkillLevelIcon: React.FC<SkillLevelIconProps> = ({ level, size = 24, className = '' }) => {
  const baseClasses = `inline-block ${className}`;
  
  const icons = {
    novice: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={baseClasses}>
        <circle cx="12" cy="12" r="8" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
      </svg>
    ),
    beginner: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={baseClasses}>
        <circle cx="12" cy="12" r="8" strokeWidth="2" />
        <path d="M12 4 L12 20" strokeWidth="2" />
        <path d="M4 12 L20 12" strokeWidth="2" />
      </svg>
    ),
    intermediate: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={baseClasses}>
        <circle cx="12" cy="12" r="8" strokeWidth="2" />
        <path d="M8 12 L16 12" strokeWidth="2" />
        <path d="M12 8 L12 16" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    advanced: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={baseClasses}>
        <circle cx="12" cy="12" r="8" strokeWidth="2" />
        <path d="M12 4 L12 20" strokeWidth="2" />
        <path d="M4 12 L20 12" strokeWidth="2" />
        <path d="M6.34 6.34 L17.66 17.66" strokeWidth="2" />
        <path d="M6.34 17.66 L17.66 6.34" strokeWidth="2" />
      </svg>
    ),
    expert: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={baseClasses}>
        <circle cx="12" cy="12" r="8" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
        <path d="M12 4 L12 8" strokeWidth="2" />
        <path d="M12 16 L12 20" strokeWidth="2" />
        <path d="M4 12 L8 12" strokeWidth="2" />
        <path d="M16 12 L20 12" strokeWidth="2" />
        <path d="M6.34 6.34 L9.17 9.17" strokeWidth="2" />
        <path d="M14.83 14.83 L17.66 17.66" strokeWidth="2" />
        <path d="M6.34 17.66 L9.17 14.83" strokeWidth="2" />
        <path d="M14.83 9.17 L17.66 6.34" strokeWidth="2" />
      </svg>
    ),
  };

  return icons[level];
};

export default SkillLevelIcon;