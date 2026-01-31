import { Code2, Database, Globe, Smartphone } from 'lucide-react';

export function About() {
  const skills = [
    {
      category: '프론트엔드',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: '백엔드',
      icon: <Database className="w-8 h-8 text-green-600" />,
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: '모바일',
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      category: '기타',
      icon: <Code2 className="w-8 h-8 text-orange-600" />,
      technologies: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">소개</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5년 이상의 경력을 가진 풀스택 개발자로, 사용자 중심의 웹 및 모바일 애플리케이션을 개발하고 있습니다.
            깨끗한 코드와 효율적인 솔루션을 추구하며, 새로운 기술을 배우는 것을 즐깁니다.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-gray-900 mb-8">기술 스택</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-[#f7f7f9] rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h4 className="ml-3 text-gray-900">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">완료한 프로젝트</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">경력 년수</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-600">만족한 고객</div>
          </div>
        </div>
      </div>
    </section>
  );
}
