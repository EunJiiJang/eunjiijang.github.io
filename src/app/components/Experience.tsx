import { useState } from 'react';
import { experiences } from '@/app/data/experiences';

export function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [logoFailed, setLogoFailed] = useState<Set<number>>(new Set());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {experiences.map((experience) => {
        const isHovered = hovered === experience.id;
        const logoMissing = logoFailed.has(experience.id);
        return (
          <a
            key={experience.id}
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(experience.id)}
            onMouseLeave={() => setHovered(null)}
            className="rounded-3xl p-4 sm:p-6 flex flex-col justify-between aspect-square transition-colors duration-300"
            style={{ backgroundColor: isHovered ? experience.color : '#f7f7f9' }}
          >
            <p
              className="text-xs uppercase tracking-wider transition-colors duration-300"
              style={{ color: isHovered ? 'rgba(255,255,255,0.75)' : '#9ca3af' }}
            >
              {experience.period}
            </p>

            <div className="flex items-center justify-center flex-1">
              {logoMissing ? (
                <span
                  className="text-3xl font-bold tracking-tight transition-colors duration-300"
                  style={{ color: isHovered ? 'rgba(255,255,255,0.9)' : experience.color }}
                >
                  {experience.company.split(' ').map(w => w[0]).join('')}
                </span>
              ) : (
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-28 h-28 object-contain transition-all duration-300"
                  style={{ filter: isHovered ? 'brightness(0) invert(1)' : 'none' }}
                  onError={() => setLogoFailed(prev => new Set(prev).add(experience.id))}
                />
              )}
            </div>

            <div>
              <p
                className="text-sm transition-colors duration-300"
                style={{ color: isHovered ? 'rgba(255,255,255,0.85)' : '#6b7280' }}
              >
                {experience.role}
              </p>
              <p
                className="font-semibold transition-colors duration-300"
                style={{ color: isHovered ? '#ffffff' : '#111827' }}
              >
                {experience.company}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
