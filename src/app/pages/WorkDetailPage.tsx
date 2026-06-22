import React from 'react';
import { useParams, Link } from 'react-router';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function WorkDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-[150px] pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            프로젝트를 찾을 수 없어요.
          </h1>
          <Link to="/work" className="text-gray-700 underline">
            Work로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[150px] pb-16 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="max-w-[800px] w-full mx-auto">
          <div className="mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
              {project.title}
            </h1>
            <p className="text-gray-500 mt-2">{project.subtitle} · {project.timeline}</p>
          </div>

          <div className="h-px bg-gray-200 mb-8 sm:mb-10"></div>

          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">My Role</p>
                <div className="space-y-2 text-gray-900">
                  {project.role.map((role) => (
                    <p key={role} className="text-sm">
                      {role}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Skills</p>
                <div className="space-y-2 text-gray-900">
                  {project.tools.map((tool) => (
                    <p key={tool} className="text-sm">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Description
                </p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Context
                </p>
                <p className="text-gray-700 leading-relaxed">{project.summary}</p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
{project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="px-5 py-2 rounded-full border border-gray-300 text-sm text-gray-900 text-center"
                  >
                    Website ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.slice(1, 3).map((image) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {project.gallery[3] && (
              <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={project.gallery[3]}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          {project.gallery[4] && (
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6">
              <div className="relative h-full min-h-[200px] sm:min-h-[260px] overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={project.gallery[4]}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 sm:mt-12 max-w-[800px] w-full mx-auto space-y-10 sm:space-y-12">
          {project.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
