import { Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const subject = encodeURIComponent('안녕하세요, Eunji Jang에게');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:jssunii951@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="contact" className="pt-0 pb-16 sm:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-5">
          <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-5 flex flex-col md:aspect-[2/1]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                <img src="/photo-cards/20260416_184219.jpg" alt="Eunji Jang" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Eunji Jang</p>
                <div className="bg-gray-200/70 text-gray-900 px-5 py-3 rounded-2xl rounded-tl-sm max-w-md">
                  want to work together? just want to chat? send me an email
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm">
                sounds good 🙏
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-auto pt-4">
              <a href="mailto:jssunii951@gmail.com" className="p-2 text-gray-400 hover:text-gray-600" aria-label="Email">
                <Mail size={20} />
              </a>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="iMessage"
                className="flex-1 bg-white rounded-full px-4 py-2 text-gray-700 placeholder-gray-400 outline-none"
              />
              <button
                onClick={handleSend}
                className={`p-2 rounded-full transition-colors ${message.trim() ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}
                aria-label="Send"
              >
                ↑
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-5 sm:aspect-square flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Eunji Jang</h3>
                  <p className="text-sm text-gray-500">eden.jang.dev@gmail.com</p>
                </div>
                <div className="w-12 h-12 rounded-2xl overflow-hidden">
                  <img src="/photo-cards/20260416_184219.jpg" alt="Eunji Jang" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-4 bg-white rounded-2xl p-4 text-sm text-gray-500">
                <p className="text-gray-700">To</p>
                <p className="text-gray-500">eden.jang.dev@gmail.com</p>
                <p className="mt-3 text-gray-400">커피챗 / 협업 제안</p>
                <p className="text-gray-400">편하게 연락주세요 :)</p>
              </div>
              <a
                href="mailto:eden.jang.dev@gmail.com"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full py-2 text-sm text-gray-700"
              >
                Email Me ↗
              </a>
            </div>

            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-5 sm:aspect-square flex flex-col">
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
          </div>
        </div>
      </div>
    </section>
  );
}
