import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';

export function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="pt-0 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[#f7f7f9] rounded-3xl overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/work/${project.slug}`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  navigate(`/work/${project.slug}`);
                }
              }}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.summary}</p>                  
                  </div>
                  <div className="h-px bg-gray-200 mt-6 mb-6"></div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={`${project.title} 보기`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-5 sm:p-6 pt-4 sm:pt-5">
                <div className="bg-white rounded-2xl p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-16"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
