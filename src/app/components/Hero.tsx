import React from 'react';
import { Experience } from '@/app/components/Experience';
import { PhotoCardCarousel } from '@/app/components/PhotoCardCarousel';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white pt-[142px] pb-16 sm:pb-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:items-stretch">
          {/* Left side - Main intro */}
          <div className="h-full">
            <div className="bg-[#f7f7f9] rounded-[32px] p-6 sm:p-8 h-full lg:min-h-[672px] flex flex-col">
              <h1 className="text-[28px] sm:text-[34px] leading-[1.2] font-medium tracking-[-0.03em] text-[#222]">
                <span><span className="text-[#949494]">My name is</span> Eunji Jang</span>
              </h1>
              <div className="h-px bg-black/[0.06] mt-6 mb-6"></div>
              
              <div className="flex flex-1 flex-col tracking-[-0.02em]">
                <div className="space-y-5 text-[#606060] text-[18px] sm:text-[20px] leading-[1.55]">
                  <p>
                    저는 구현보다 문제를 먼저 봅니다.<br />
                    무엇을 만들 수 있는지보다 왜 만들어야 하는지 질문합니다.
                  </p>

                  <p>
                    복잡한 요구사항을 단순하고 지속 가능한 구조로 풀어내고,<br />
                    사용자의 시간과 운영의 부담을 줄이는 방법을 고민합니다.
                  </p>

                  <p>
                    좋은 개발은 더 많은 기능을 만드는 일이 아니라,<br />
                    꼭 필요한 문제를 정확히 해결하는 일이라고 믿습니다.
                  </p>

                  <p>
                    사용자와 운영자의 흐름을 함께 살피고,<br />
                    서비스가 성장해도 유연하게 변화할 수 있는 제품을 만듭니다.
                  </p>
                </div>

                <div className="mt-7 border-t border-black/[0.06] pt-6 space-y-3 text-[#8a8a8a] text-[16px] sm:text-[18px] leading-[1.55]">
                  <p>
                    I begin with why, then find the simplest way forward.
                  </p>
                  <p>
                    I build thoughtful, sustainable products that save time,<br className="hidden sm:block" />
                    reduce friction, and evolve gracefully as they grow.
                  </p>
                </div>

                <div className="mt-auto pt-8 flex items-end justify-between gap-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#a5a5a5]">
                    My principle
                  </p>
                  <p className="text-right text-[20px] sm:text-[23px] leading-[1.2] font-medium tracking-[-0.035em] text-[#565656]">
                    Less complexity.<br />
                    More clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Bento grid */}
          <div className="flex flex-col gap-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
            {/* Twitter card */}
            <div className="bg-[#f7f7f9] rounded-[32px] p-5 sm:p-6 aspect-square">
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

            <PhotoCardCarousel />
            </div>

            {/* Email card */}
            <div className="bg-[#f7f7f9] rounded-[32px] p-4 sm:p-6 flex-1 flex flex-col">
              <div className="bg-white rounded-2xl border border-black/[0.04] shadow-[0_8px_22px_rgba(0,0,0,0.07)] p-5 sm:p-6">
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm">
                    <span className="text-gray-400">To:</span>{' '}
                    <span className="text-gray-900">eden.jang.dev@gmail.com</span>
                  </p>
                </div>
                <div className="py-3 border-b border-gray-200">
                  <p className="font-semibold text-gray-900">커피챗 나누고 싶어요</p>
                </div>
                <div className="pt-4 space-y-4">
                  <p className="text-sm text-gray-900">안녕하세요</p>
                  <p className="text-sm text-gray-900">
                    포트폴리오를 인상 깊게 보았습니다.
                  </p>
                  <p className="text-sm text-gray-900">
                    경험과 커리어에 대해 이야기를 나눠보고 싶어 연락드렸습니다.
                  </p>
                  <p className="text-sm text-gray-900">
                    시간이 괜찮으시다면 짧게 커피챗 가능할까요?
                  </p>
                  <p className="text-sm text-gray-900">감사합니다.</p><br/>
                  <div className="flex justify-end pt-2">
                    <a
                      href="mailto:eden.jang.dev@gmail.com"
                      className="px-4 py-2 bg-slate-100 text-slate-500 text-xs font-medium tracking-wider rounded-md"
                    >
                      SEND EMAIL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Experience />
      </div>
    </section>
  );
}
