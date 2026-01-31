import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-semibold mb-2">
              &lt;개발자포트폴리오 /&gt;
            </div>
            <p className="text-gray-400">
              혁신적인 솔루션을 만드는 개발자
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:example@email.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2026 개발자 포트폴리오. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
