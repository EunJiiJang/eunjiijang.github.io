import React from 'react';
import { Twitter } from 'lucide-react';
import { Experience } from '@/app/components/Experience';
import { PhotoCardCarousel } from '@/app/components/PhotoCardCarousel';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white pt-[150px] pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-5 lg:items-stretch">
          {/* Left side - Main intro */}
          <div className="h-full">
            <div className="bg-[#f7f7f9] rounded-3xl p-6 sm:p-8 lg:p-12 h-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                <span className="text-3xl"> <span className="text-gray-500">My name is</span> Eunji Jang</span>
              </h1>
              <div className="h-px bg-gray-200 mt-6 mb-6"></div>
              
              <div className="space-y-4 text-gray-500 text-lg">
                  <p>무언가를 어떻게 만들지 고민하기 전에,<br/>
                  왜 그것이 필요한지부터 질문한다.</p>

                  <p>기술은 목적이 아니라 수단이라고 믿는다.</p>

                  <p>사용자의 시간을 아끼고,<br/>
                  운영의 복잡성을 줄이며,<br/>
                  서비스가 성장해도 유지보수 가능한 구조를 만드는 것.</p>

                  <p>그런 가치를 만드는 개발자가 되고자 한다.</p>

                  <p>I start with the problem, not the solution.</p>

                  <p>Before thinking about how to build something,<br/>
                  I ask why it needs to exist.</p>

                  <p>Technology is a means, not an end.</p>

                  <p>I care about creating software that saves people time,<br/>
                  reduces operational complexity,<br/>
                  and remains maintainable as it grows.</p>

                  <p>That's the kind of impact I strive to make as a developer.</p>
              </div>
            </div>
          </div>

          {/* Right side - Bento grid */}
          <div className="flex flex-col gap-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
            {/* Twitter card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-5 sm:p-6 aspect-square">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">HG</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Eunji Jang</span>
                    <Twitter size={20} className="text-blue-400" />
                  </div>
                  <span className="text-gray-500 text-sm">@eunjijang</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                prev <br /> @ibank
                <br /> @innisfree global
                <br /> @aestura
                <br /> @creatz
                <br /> @qed
                <br />
              </p>
            </div>

            <PhotoCardCarousel />
            </div>

            {/* Email card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6 flex-1 flex flex-col">
              <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
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
                    <button
                      type="button"
                      className="px-4 py-2 bg-slate-100 text-slate-500 text-xs font-medium tracking-wider rounded-md"
                    >
                      SEND EMAIL
                    </button>
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