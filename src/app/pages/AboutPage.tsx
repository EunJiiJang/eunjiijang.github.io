import { Music, Twitter, Mail, MessageCircle, Podcast } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-[150px] pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          {/* Left side - About text */}
          <div className="bg-[#f7f7f9] rounded-3xl p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">What I'm bout.</h1>
            
            <div className="space-y-6 mt-8">
              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHERE I'M FROM</h2>
                <p className="text-gray-700 leading-relaxed">
                  I was born and raised in Seoul, Korea. Growing up, I was always fascinated by technology and design. 
                  My parents encouraged me to explore my creativity while staying grounded in practical skills. 
                  There's something special about where you're from that shapes who you become.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHAT I USED TO DO</h2>
                <p className="text-gray-700 leading-relaxed">
                  When I was younger, I explored various creative outlets - from graphic design to video editing. 
                  I worked on small freelance projects, built websites for local businesses, and learned the fundamentals 
                  of user experience design through trial and error.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHAT I DO NOW</h2>
                <p className="text-gray-700 leading-relaxed">
                  Today I'm a <span className="font-semibold">Full Stack Developer</span> designing and building 
                  digital experiences. I specialize in React, TypeScript, and modern web technologies. 
                  I focus on creating intuitive, performant applications that users love.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHERE I'M AT NOW</h2>
                <p className="text-gray-700 leading-relaxed">
                  Currently based in Seoul, South Korea. When I'm not coding, you can usually find me 
                  exploring coffee shops, reading about design, or working on side projects that interest me.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHAT I'M LOOKING FOR</h2>
                <p className="text-gray-700 leading-relaxed">
                  Impactful, purposeful work with a diverse team of talented people. 
                  I'm passionate about products that make a difference in people's lives.
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 pt-6">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <MessageCircle size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Mail size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>

          {/* Right side - Social cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Twitter card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-5 sm:p-6 sm:aspect-square">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">HG</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">홍길동</span>
                    <Twitter size={20} className="text-blue-400" />
                  </div>
                  <span className="text-gray-500 text-sm">@honggildong</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                cooking up • prev @company @another
              </p>
              <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                Read mid tweets →
              </button>
            </div>

            {/* Music player card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-5 sm:p-6 sm:aspect-square flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-2xl flex-shrink-0 overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop"
                      alt="Album cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Now Playing</p>
                    <p className="font-semibold text-gray-900">Nights</p>
                    <p className="text-sm text-gray-500">Frank Ocean — Blonde</p>
                  </div>
                </div>
                <Music size={22} className="text-red-500" />
              </div>
              <div className="mt-auto">
                <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-4">
                  <div className="h-full w-2/3 bg-gray-900"></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span>1:24</span>
                  <span>4:02</span>
                </div>
                <div className="flex items-center justify-between">
                  <button className="p-2 hover:bg-white rounded-full transition-colors" aria-label="Previous">
                    ⏮
                  </button>
                  <a
                    href="https://music.youtube.com/watch?v=Z3dM4zZK6ZQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                  >
                    Listen
                  </a>
                  <button className="p-2 hover:bg-white rounded-full transition-colors" aria-label="Next">
                    ⏭
                  </button>
                </div>
              </div>
            </div>

            {/* Photo card */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden sm:aspect-square relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&fit=crop"
                alt="Beach photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 rounded-lg"></div>
              </div>
            </div>

            {/* Podcast card */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-5 sm:p-6 text-white sm:aspect-square">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold mb-1">VISUAL</p>
                  <p className="text-2xl font-bold text-orange-400">DEV.FM</p>
                </div>
                <Podcast size={32} className="text-purple-400" />
              </div>
              <p className="text-sm mb-1">Career as a Visual Developer?</p>
              <p className="text-xs text-gray-300">The Visual Developer Podcast</p>
              <div className="flex gap-3 items-center mt-4">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  🔊
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  ⏮
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  ▶️
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  ⏭
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  🔊
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}