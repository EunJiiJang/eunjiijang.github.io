import { Mail } from 'lucide-react';
import { PhotoCardCarousel } from '@/app/components/PhotoCardCarousel';
import { MusicCard } from '@/app/components/MusicCard';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-[150px] pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          {/* Left side - About text */}
          <div className="bg-[#f7f7f9] rounded-3xl p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">What I'm bout.</h1>
            <div className="h-px bg-gray-200 mt-6 mb-6"></div>
            <div className="space-y-6 mt-8">
              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHERE I'M FROM</h2>
                <p className="text-gray-700 leading-relaxed">
                  서울에서 9년, 전라남도 무안에서 9년을 보냈습니다. 대학 진학 이후 다시 서울로 올라와 현재까지 생활하며 커리어를 이어가고 있습니다. 다양한 환경에서의 경험은 새로운 관점을 배우고 적응하는 데 큰 밑거름이 되었습니다.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHAT I USED TO DO</h2>
                <p className="text-gray-700 leading-relaxed">
                  뷰티, 스포츠 분야의 다양한 서비스를 개발했습니다. Aestura, Innisfree Global, Creatz, QED에서 백엔드 개발자로 일하며 글로벌 서비스와 관리자 시스템 구축, 실시간 기능 개발 등 다양한 실무 경험을 쌓았습니다.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHAT I DO NOW</h2>
                <p className="text-gray-700 leading-relaxed">
                  Java와 Spring Boot를 중심으로 백엔드 시스템을 설계하고 개발합니다. 최근에는 개인 프로젝트를 통해 React와 TypeScript도 함께 활용하며 서비스 전체를 바라보는 개발을 지향하고 있습니다.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHERE I'M AT NOW</h2>
                <p className="text-gray-700 leading-relaxed">
                  서울을 기반으로 활동하고 있습니다. 코딩 외에는 여행을 다니고, 카페를 돌아다니거나 관심 있는 사이드 프로젝트를 틈틈이 만드는 것을 좋아합니다.
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-3">WHAT I'M LOOKING FOR</h2>
                <p className="text-gray-700 leading-relaxed">
                  사용자에게 실질적인 가치를 전달하는 제품을 만드는 일에 관심이 많습니다. 기술 자체보다 문제 해결에 집중하며, 오래 사랑받는 서비스를 만드는 개발자가 되고 싶습니다.
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 pt-6">
              <a
                href="mailto:eden.jang.dev@gmail.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Social cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Twitter card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-5 sm:p-6 sm:aspect-square">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                  <img src="/photo-cards/20260416_184219.jpg" alt="Eunji Jang" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Eunji Jang</span>
                  </div>
                  <span className="text-gray-500 text-sm">@eunjijang</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                prev <br />
                <a href="https://www.digitalworks.co.kr/dgMain.do" target="_blank" rel="noopener noreferrer" className="text-[#1D9BF0] hover:underline">@ibank</a>
                <br />
                <a href="https://us.innisfree.com" target="_blank" rel="noopener noreferrer" className="text-[#1D9BF0] hover:underline">@innisfree global</a>
                <br />
                <a href="https://www.aestura.com/web/main.do" target="_blank" rel="noopener noreferrer" className="text-[#1D9BF0] hover:underline">@aestura</a>
                <br />
                <a href="https://www.mycreatz.com/main/main" target="_blank" rel="noopener noreferrer" className="text-[#1D9BF0] hover:underline">@creatz</a>
                <br />
                <a href="https://qedgolf.com" target="_blank" rel="noopener noreferrer" className="text-[#1D9BF0] hover:underline">@qed</a>
                <br />
              </p>
            </div>


            {/* Seoul City card */}
            <MusicCard
              title="Seoul City"
              artist="JENNIE"
              album="Ruby"
              artwork="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/97/4d/0e/974d0ed9-0c7b-59da-da0f-7a22ebfc1479/196872953367.jpg/400x400bb.jpg"
              previewUrl="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/9f/b6/6e9fb64b-f604-3fcf-7df0-04ae8137a581/mzaf_10741472618186864871.plus.aac.p.m4a"
              appleMusicUrl="https://music.apple.com/us/song/seoul-city/1800281936"
            />

            <PhotoCardCarousel className="sm:aspect-square" />

            {/* Midnight Mirage card */}
            <MusicCard
              title="Midnight Mirage"
              artist="RIIZE"
              album="ODYSSEY"
              artwork="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5b/9a/57/5b9a5770-9af1-96e1-3bf5-ba01faf63e9c/888735952104.jpg/400x400bb.jpg"
              previewUrl="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/37/58/8c/37588c61-1c30-75d8-a8d3-93768bdcfe89/mzaf_8932435931072434023.plus.aac.p.m4a"
              appleMusicUrl="https://music.apple.com/us/song/midnight-mirage/1813454039"
            />

          </div>
        </div>
      </div>
    </div>
  );
}